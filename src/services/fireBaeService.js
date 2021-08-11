import firebase from "firebase/app";
import 'firebase/firestore'

const app = firebase.initializeApp({
    
        apiKey: "AIzaSyD8WFpi4TmzUdSHs7GmSUU3JraoGVC3U-A",
        authDomain: "productos-57708.firebaseapp.com",
        projectId: "productos-57708",
        storageBucket: "productos-57708.appspot.com",
        messagingSenderId: "742048091276",
        appId: "1:742048091276:web:5edfeb7deb71c0553bbfa9"
      })
export function getFirebase(){
    return app
}
export function getFirestore(){
    return firebase.firestore(app)
}
    
