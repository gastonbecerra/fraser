import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp  ({
    apiKey: "AIzaSyAGivSntwuwMstIE1JCf1H-cQQInTKpSsg",
    authDomain: "fraser-7ae05.firebaseapp.com",
    projectId: "fraser-7ae05",
    storageBucket: "fraser-7ae05.appspot.com",
    messagingSenderId: "694571646202",
    appId: "1:694571646202:web:1519a867728568bd8edd43",
    measurementId: "G-466E3R3QMN"
  });
  
  export function getFirebase(){
      return app;
  }

  export function getFirestore(){
    return firebase.firestore(app);
  }