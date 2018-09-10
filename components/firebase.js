import * as firebase from "firebase";

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "....appspot.com",
    messagingSenderId: "11737612626"
  };
export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();