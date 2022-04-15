const initialState = {
    blogs: [
        { id: '1', title: 'JavaScript', content: 'blah blah blah' },
        { id: '2', title: 'React Js', content: 'blah blah blah' },
        { id: '3', title: 'Redux', content: 'blah blah blah' },
    ],
}

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_BLOG':
            console.log('blog/ created', action.blog);
            return state
        case 'CREATE_BLOG_ERROR':
            console.log('blog/ ERROR', action.err);
            return state
        default:
            return state
    }
}

export default blogReducer