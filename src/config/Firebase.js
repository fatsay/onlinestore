import firebase from "firebase/app";
import "firebase/auth";
// Initialize Firebase
const config = {
        
};

firebase.initializeApp(config);
export const providerGoogle = new firebase.auth.GoogleAuthProvider();
export const providerFacebook=new firebase.auth.FacebookAuthProvider();
export const auth = firebase.auth();
export default firebase;


