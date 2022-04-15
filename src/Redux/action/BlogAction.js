import { getFirestore } from "redux-firestore";
const createBlog = (blog) => {
    const firestore = getFirestore(); //it gives us a ref to our db on fb
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        firestore.collection('blogs').add({
            ...blog,
            authorFirstName: 'Venus',
            authorLastName: 'William',
            authorId: 12345,
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



// const createBlog = (blog) => {
//     return (dispatch,getState, {getFirebase, getFirestore}) => {
//         dispatch(
//             {
//                 type: "CREATE_BLOG",
//                 blog: blog
//             }
//         )
//     }
// }

// export default createBlog
export default createBlog