import { getFirestore } from "redux-firestore";
const createBlog = (blog) => {
    const firestore = getFirestore(); //it gives us a ref to our db on fb
    return (dispatch, getState, { getFirebase, getFirestore }) => {
         const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('blogs').add({
            ...blog,
            authorFirstName: profile.authorFirstname,
            authorLastName: profile.authorLastname,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_BLOG', blog });
        }).catch((err) => {
            dispatch({ type: 'CREATE_BLOG_ERROR', err });
        })
    }
    /* return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make our async call to database later
        dispatch({type:'CREATE_PROJECT', project: project}); //it holds the process
    } */
}


export default createBlog


// Deleta blog

export const deleteBlog = (id) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('blogs')
            .doc(id)
            .delete()
            .then(() => {
                dispatch({ type: 'DELETE_BLOG' });
            }).catch((err) => {
                dispatch({ type: 'DELETE_BLOG_ERROR', err });
            })
    }
}

// Update blog

export const updateBlog = (blog, id) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('blogs')
            .doc(id)
            .update(blog)
            .then(() => {
                dispatch({ type: 'UPDATE_BLOG', blog });
            }).catch((err) => {
                dispatch({ type: 'UPDATE_BLOG_ERROR', err });
            })
    }
}