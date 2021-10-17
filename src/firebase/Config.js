import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBO4p_F70_RQOzBphgXrcqt2j9Jl8EHcbQ",
    authDomain: "olx-demo-fba44.firebaseapp.com",
    projectId: "olx-demo-fba44",
    storageBucket: "olx-demo-fba44.appspot.com",
    messagingSenderId: "376767928523",
    appId: "1:376767928523:web:92365864dfeadc34b7234e"
  };
  export default firebase.initializeApp(firebaseConfig);