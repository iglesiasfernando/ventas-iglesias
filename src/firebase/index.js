import firebase from 'firebase';
import 'firebase/firestore'


const app = firebase.initializeApp({
    apiKey: "AIzaSyDmlLv71Uozsd3dgKbAWd_0l3oTDX7jKkE",
    authDomain: "ventas-iglesias.firebaseapp.com",
    projectId: "ventas-iglesias",
    storageBucket: "ventas-iglesias.appspot.com",
    messagingSenderId: "521220874666",
    appId: "1:521220874666:web:d3b51295dceb9f21708bd3"
})


export function getFirebase(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app)
}