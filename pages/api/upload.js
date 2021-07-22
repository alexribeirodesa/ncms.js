/**
  * @fileoverview api/userAuth.js
  * @author Alexandre Ribeiro de Sá (@alexribeirodesa)
  * 
  * user authentication api
  * POST https://www.dialogastudio.com.br/api/user/auth -data {email: user email address&password: user password&hash: data hash},
  * OUT {status:success}/{status:err, code:#}
  */

// react imports
import firebase from "firebase/app"
import 'firebase/auth'
import multer from 'multer';

// core imports
import firebaseInit from '../../src/core/firebase'

// api config
global.XMLHttpRequest = require("xhr2");
export const config = {
  api: {
    bodyParser: true,
  },
}




//from lamda event
/*
if (event.isBase64Encoded) {
    var buf = Buffer.from(event.body, 'base64');
    let raw = buf.toString('utf8');
    const boundary = extractBoundary(buf);
    console.log('boundary:' + Buffer.from(boundary).toString('utf8'));
    let cleanBuffer = extractBufferBetween(buf,
        [...encode('Content-Type: application/x-zip-compressed'), 13, 10, 13, 10],
        [13, 10, ...boundary]
    );
    //use the cleanBuffer to upload to S3, save locally etc.
}
			
const encode = (str) => {
    const ans = [];
    for (let i = 0; i < str.length; i++) {
        ans.push(str.charCodeAt(i));
    }
    return ans;
};
const extractBoundary = (buf) => {
    let newArr = [];
    const pattern = [13, 10];
    let patternCnt = 0;

    for (const b of buf) {
        newArr.push(b);
        if (patternCnt < pattern.length && pattern[patternCnt] === b) {
            patternCnt++;
            if (patternCnt === pattern.length) {
                break;
            }
        }
    }
    return newArr.slice(0, newArr.length - patternCnt);
};

const extractBufferBetween = (buf, from, to) => {
    const patterns = [
        from,
        to
    ];
    let patternCnt = 0;
    let started = false;
    let pattern = patterns.shift();
    let newArr = [];
    for (const b of buf) {
        if (!pattern) break;
        if (started) {
            newArr.push(b);
        }
        if (patternCnt < pattern.length && pattern[patternCnt] === b) {
            patternCnt++;
            if (patternCnt === pattern.length) {
                if (started) {
                    started = false;
                    newArr = newArr.slice(0, newArr.length - patternCnt);
                } else {
                    started = true;
                    pattern = patterns.shift();
                    patternCnt = 0;
                }
            }
        } else {
            patternCnt = 0;
        }
    }

    return Buffer.from(newArr);
};
*/




// safely handles circular references
JSON.safeStringify = (obj, indent = 2) => {
  let cache = [];
  const retVal = JSON.stringify(
    obj,
    (key, value) =>
      typeof value === "object" && value !== null
        ? cache.includes(value)
          ? undefined // Duplicate reference found, discard key
          : cache.push(value) && value // Store value in our collection
        : value,
    indent
  );
  cache = null;
  return retVal;
};

function getMatching(string, regex) {
  // Helper function when using non-matching groups
  const matches = string.match(regex);
  if (!matches || matches.length < 2) {
    return null;
  }
  return matches[1];
}

function getBoundary(req) {
  let contentType = req.headers['content-type'];
  const contentTypeArray = contentType.split(';').map(item => item.trim());
  const boundaryPrefix = 'boundary=';
  let boundary = contentTypeArray.find(item => item.startsWith(boundaryPrefix));
  
  if(!boundary) return null;
  boundary = boundary.slice(boundaryPrefix.length);
  if (boundary) boundary = boundary.trim();
  return boundary;
}

function ConvertStringToHex(str) {
  var arr = [];
  for (var i = 0; i < str.length; i++) {
         arr[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
  }
  return "\\u" + arr.join("\\u");
}

// api output
export default async (req, res) => {
  let out = {'status': 'loading', 'data': {}};
  let { headers, body } = req;

  //console.log(body);
  var multipart = require('parse-multipart');

  // get boundery
  var boundary = getBoundary(req);
  
  let result = {}
  const items = body.split(boundary)
  for (let item of items) {
    // get name
    let name = getMatching(item, /(?:name=")(.+?)(?:")/);
    if (!name || !(name = name.trim())) continue;

    // get value
    let value = getMatching(item, /(?:\r\n\r\n)([\S\s]*)(?:\r\n--$)/);
    if (!value) continue;

    // get filename
    let filename = getMatching(item, /(?:filename=")(.*?)(?:")/);;
    if (filename && (filename = filename.trim())) {
      let file = {};
      file[name] = value;
      file['filename'] = filename;
      let contentType = getMatching(item, /(?:Content-Type:)(.*?)(?:\r\n)/);
      if (contentType && (contentType = contentType.trim())) {
        file['Content-Type'] = contentType;
      }
      if (!result.files) {
        result.files = [];
      }
      result.files.push(file);
    } else {
      // Key/Value pair
      result[name] = value;
    }
  }

  
  let storageRef = firebase.storage().ref();
  let ref = storageRef.child(result.files[0].filename);
  //let content = new Blob(result.files[0].fileUpload, {type : result.files[0]['Content-Type']});
  let content = Buffer.from(result.files[0].fileUpload);
  //console.log(result.files[0].fileUpload);
  //console.log(content.toString('base64'));
  
  let metadata = {
    name: result.files[0].filename,
    contentType: result.files[0]['Content-Type'],
  };

  /*var message = 'data:text/plain;base64,5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
ref.putString(message, 'data_url').then(function(snapshot) {
  console.log('Uploaded a data_url string!');
});*/
  //ref.put(content, metadata).then(function(snapshot) {
  //ref.putString(`data:${result.files[0]['Content-Type']};base64,${content.toString('base64')}`, 'data_url').then(function(snapshot) {
  //console.log(`data:${result.files[0]['Content-Type']};base64,${content.toString('base64')}`);
  //ref.putString(, 'base64').then(function(snapshot) {

  ref.put(content, metadata).then(function(snapshot) {
  //ref.putString(content.toString('ascii'), 'base64', metadata).then(function(snapshot) {
    //console.log(JSON.stringify(snapshot));
    snapshot.ref.getDownloadURL().then(function(downloadURL) {
      console.log('File available at', downloadURL);
    });  
    console.log('Uploaded a raw string!');
  });

  res.status(200).send(out);
};