/*

Initializing firebase

productionConfig => config for production
developmentConfig => config for development

Used so that you never mix up data from development mode and production mode

*/
import Rebase from 're-base';
import firebase from 'firebase';
require("firebase/firestore");

const productionConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
};

const developmentConfig = {
    apiKey: "AIzaSyBEuFK5Y0f48uerSbPCZ9keWKPk2TEKj8k",
    authDomain: "algoswitch.firebaseapp.com",
    databaseURL: "https://algoswitch.firebaseio.com",
    projectId: "algoswitch",
    storageBucket: "algoswitch.appspot.com",
    messagingSenderId: "725203303109"
};

const config = process.env.NODE_ENV === 'production'
    ? productionConfig
    : developmentConfig

if (!firebase.apps.length) {
    var app = firebase.initializeApp(config);
}
const base = Rebase.createClass(app.database());
const auth = app.auth();
var db = firebase.firestore();
var storage = firebase.storage();

export default base;
export {auth, base, db, storage};
