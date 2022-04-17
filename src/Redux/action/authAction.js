import { getFirestore } from "redux-firestore";

export const signIn = (credentials) => {
    //signin is our action creator

    return (dispatch, getState, { getFirebase }) => {
        //initializing firebase instance
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email, credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err })
        })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase}) => {
        //initializing firebase instance
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email, newUser.password
        ).then((resp)=>{
            return firestore.collection('users').doc(resp.user.uid)
            .set({
                authorFirstname: newUser.firstName,
                authorLastname: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
                
        }).then(()=>{
            dispatch({type:'SIGNUP_SUCCESS'})
        })
        }).catch((err)=>{
            dispatch({type:'SIGNUP_ERROR', err})
        })
    }
}


export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        //initializing firebase instance
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' })
        })
    }
}


