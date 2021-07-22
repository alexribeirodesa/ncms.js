 /**
  * @fileoverview api/userAuth.js
  * @author Alexandre Ribeiro de Sá (@alexribeirodesa)
  * 
  * firebase api framework
  */
 
import firebase from "./firebase";

class database {
  constructor() {
    console.log('database creates');
  }

  userCreate(email, password) {
    console.log('user create');
  }

  userLogin(email, password) {
    console.log('user login');
  }
  
  create(collection, data) {
    console.log("create");
  }

  edit(collection, id, data) {
    console.log("edit"); 
  }

  delete(collection, id) {
    console.log("delete"); 
  }

  delete(collection, query) {
    console.log("query"); 
  }
}

module.exports = database;
