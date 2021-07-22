import firebase from "firebase/app";
import "firebase/firestore";

// isso vai ficar nas variaveis de ambiente do servidor
const firebaseConfig = {
  //apiKey: "AIzaSyCX7RjRRE_Q-cmr8RHtpKSjlKPukEi03hg",
  //authDomain: "dialoga-develop.firebaseapp.com",
  //projectId: "dialoga-develop",
  //torageBucket: "dialoga-develop.appspot.com",
  //essagingSenderId: "1073977047280",
  //ppId: "1:1073977047280:web:6f7dc73ac688847794ea35"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);  
}else {
  firebase.app();
}

export default firebase;