import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyDN8GtTG18l7l3kscssNJgcIrWfmajuVGc",
    authDomain: "postosehospitais.firebaseapp.com",
    databaseURL: "https://postosehospitais.firebaseio.com",
    projectId: "postosehospitais",
    storageBucket: "postosehospitais.appspot.com",
    messagingSenderId: "11737612626"
  };
export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();