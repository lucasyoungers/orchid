import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCv4pZfHR_Dn6cO_Ct3NLizBo2sKhzxboI",
    authDomain: "orchid-app-ly.firebaseapp.com",
    databaseURL: "https://orchid-app-ly.firebaseio.com",
    projectId: "orchid-app-ly",
    storageBucket: "orchid-app-ly.appspot.com",
    messagingSenderId: "1064911727774",
    appId: "1:1064911727774:web:4a8b1c7863c0de55"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({
    timestampsInSnapshots: true
});
export default firebaseApp.firestore();