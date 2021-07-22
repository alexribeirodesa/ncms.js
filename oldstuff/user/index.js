/**
 * @fileoverview api/userAuth.js
 * @author Alexandre Ribeiro de Sá (@alexribeirodesa)
 *
 * firebase api framework
 */
 
import firebase from "../database/firebase";
import 'firebase/auth'
import {useEffect, useState} from 'react'


var _user = null;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    _user = user;
  } else {
    _user = null;
  }

  console.log(`objeto: ${user}`);
});

class user {
  constructor() {
    /*
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        _user = user;
      } else {
        _user = null;
      }
    });
    */
  }

  getCurrentUser() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        _user = user;
      } else {
        _user = null;
      }
    
      console.log(`objeto: ${user}`);
    });

    console.log(`getCurrentUser: ${_user}`);
    return _user;
  }

  getUserByUID(uid) {
  }
  
  getUserByEmail(email) {
    var out = {
      'status': 'success',
      'data': {}
    }

    firebase.auth().getUserByEmail(email) .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
    })
    .catch((error) => {
      console.log('Error fetching user data:', error);
    });

    return(`{status:"success", {}}`);
  }
  
  async create(email, password) {
    var out = {
      'status': 'success',
      'data': {}
    }

    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      out.data = userCredential.user;
      //console.log(JSON.stringify(userCredential.user))
    })
    .catch((error) => {
      out.status = 'error';
      out.data.code = error.code;
      out.data.message = error.message;
    });

    return out;
  }

  async login(email, password) {
    let out = {
      'status': 'success',
      'data': {}
    };
    
    
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      out.data = userCredential.user;
    })
    .catch((error) => {
      out.status = 'error';
      out.data.code = error.code;
      out.data.message = error.message;
    });

    return out;
  }

  logout() {
    console.log('user logout');
  }

  update() {
    
  }

  emailUpdate() {
  }
}

module.exports = user;
