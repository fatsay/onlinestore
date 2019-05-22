import firebase from "firebase/app";
import "firebase/auth";
// Initialize Firebase
const config = {
        apiKey: "AIzaSyDEiC8s89U5JgIJykVEw3et-0biVtSx1rk",
        authDomain: "fir-test-bcbfe.firebaseapp.com",
        databaseURL: "https://fir-test-bcbfe.firebaseio.com",
        projectId: "fir-test-bcbfe",
        storageBucket: "fir-test-bcbfe.appspot.com",
        messagingSenderId: "399020136811"
};

firebase.initializeApp(config);
export const providerGoogle = new firebase.auth.GoogleAuthProvider();
export const providerFacebook=new firebase.auth.FacebookAuthProvider();
export const auth = firebase.auth();
export default firebase;


