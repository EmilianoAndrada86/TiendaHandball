import firebase from "firebase/app";
import 'firebase/firestore'

const app = firebase.initializeApp({
    
    apiKey: "AIzaSyDe613x9hLSscZDyj0HCFHUeD4kG-w12vc",
    authDomain: "producto2-c5a72.firebaseapp.com",
    projectId: "producto2-c5a72",
    storageBucket: "producto2-c5a72.appspot.com",
    messagingSenderId: "239961406390",
    appId: "1:239961406390:web:e5827641237c7c743c1f17"
      })
export function getFirebase(){
    return app
}
export function getFirestore(){
    return firebase.firestore(app)
}
    
