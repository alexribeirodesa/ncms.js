//'dialoga-storage', 'dialoga-studio'

const path = require('path');
const {Storage} = require("@google-cloud/storage");

class CDN {
  storage;
  bucketName = 'dialoga-storage';
  
  constructor(bucketName, projectId) {
    this.bucketName = bucketName;

    this.storage = new Storage({
      keyFilename: 'private/key.json',
      projectId: projectId
    });
  }

  async uploadFile(originFile, destFile) {
    //let bucketName = 'dialoga-storage';
    //let filePath = 'C:/Users/alexa/Desktop/pixelfrito_home.jpg';
    //let destFileName = 'projeto/home.jpg'

    await this.storage.bucket(this.bucketName).upload(originFile, {
      destination: destFile,
    });

    console.log(`${originFile} uploaded to ${this.bucketName}`);
  }
}

module.exports = CDN;