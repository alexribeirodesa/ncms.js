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
import cookies from 'js-cookie'

// core imports
import firebaseInit from '../../../src/core/firebase'
import {mapUserData} from '../../../src/core/firebase/mapUserData'
import {setUserCookie} from '../../../src/core/firebase/userCookies'

// api config
export const config = {
  api: {
    bodyParser: true,
  },
}

// api output
export default async (req, res) => {
  let out = {'status': 'loading', 'data': {}};
  let email  =  req.body.email;
  let password = req.body.password;

  await firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    const userData = mapUserData(userCredential.user);
    out.status = 'success';
    out.data = userData;
    setUserCookie(userData);
  })
  .catch((error) => {
    //logoutUser();
    out.status = 'error';
    out.data.code = error.code;
    out.data.message = error.message;
  });

  res.status(200).send(out);
};