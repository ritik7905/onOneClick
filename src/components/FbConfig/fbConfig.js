import firebase from "firebase/compat/app"; //only core functionality
import "firebase/compat/firestore"; //database functionality
import "firebase/compat/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBtf68EUAnc9gFYtxRDvVNTQ2kQXzN38zE",
    authDomain: "ononeclick-85d25.firebaseapp.com",
    projectId: "ononeclick-85d25",
    storageBucket: "ononeclick-85d25.appspot.com",
    messagingSenderId: "482572185577",
    appId: "1:482572185577:web:0ca3d534636385a7ce6578"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({
    timestampsInSnapshots: true,
});
export default firebase;