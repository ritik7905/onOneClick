import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
// firebase Assentials
import firebase from 'firebase/compat/app';
import { getFirestore, reduxFirestore, createFirestoreInstance } from 'redux-firestore';
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import fbConfig  from "../../components/FbConfig/fbConfig";

export const store = createStore(rootReducer, compose(applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })), reduxFirestore(firebase, fbConfig)));



export const rrfConfig = {
    userProfile: "users",
    userFirestoreForProfile: true
}

export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}