import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCpPPcGXAyq1tiBtvAHX6gU0aD1iT4Ea2o",
  authDomain: "wf-chat-da6c6.firebaseapp.com",
  databaseURL: "https://wf-chat-da6c6.firebaseio.com",
  projectId: "wf-chat-da6c6",
  storageBucket: "wf-chat-da6c6.appspot.com",
  messagingSenderId: "79842446880"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
