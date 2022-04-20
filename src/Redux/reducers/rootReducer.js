import authReducer from "./authReducer"
import blogReducer from "./blogReducer"
import { imageUploadReducer } from "./imageUploadReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";


const rootReducer = combineReducers({
    auth: authReducer,
    blog: blogReducer,
    imageUpload: imageUploadReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer