// react imports
import firebase from "firebase/app";
import 'firebase/auth'

// core imports
import firebaseInit from './index'
import {removeUserCookie, getUserFromCookie, setUserCookie} from './userCookies'
import {mapUserData} from './mapUserData'

export const getCurrentUser = () => {
  let out = {
    'status': 'success',
    'data': {}
  }

  let userData = getUserFromCookie();

  const cancelAuthListener = firebase.auth().onIdTokenChanged((user) => {
    if(user) {
      userData = mapUserData(user);
      setUserCookie(userData);
      out.status = 'success';
      out.data = userData;
    } else {
      removeUserCookie();
      out.status = 'error';
    }
  })

  return userData;
}

export const createUser = async (email, password) => {
  let out = {
    'status': 'success',
    'data': {}
  }

  await firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    const userData = mapUserData(userCredential.user);
    out.status = 'success';
    out.data = userData;
  })
  .catch((error) => {
    out.status = 'error';
    out.data.code = error.code;
    out.data.message = error.message;
  });

  return out;
}

export const loginUser = async (email, password) => {
  let out = {
    'status': 'loading',
    'data': {}
  };
  
  /*
  let request = {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: `email=${email}&password=${password}`
  };

  await fetch('/api/user/login', request)
  .then(async response => {
    const isJson = response.headers.get('content-type')?.includes('application/json');
    const data = isJson && await response.json();
    out = data;
  });
  */
  
  await firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    const userData = mapUserData(userCredential.user);
    setUserCookie(userData);
    out.status = 'success';
    out.data = userData;
  })
  .catch((error) => {
    logoutUser();
    out.status = 'error';
    out.data.code = error.code;
    out.data.message = error.message;
  });

  return out;
}

export const logoutUser = () => {
  firebase.auth().signOut()
  .then(() => {
    removeUserCookie();
  })
  .catch(() => {});
}