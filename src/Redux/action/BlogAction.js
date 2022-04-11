const createBlog = (blog) => {
    return (dispatch) => {
        dispatch(
            {
                type: "CREATE_BLOG",
                blog: blog
            }
        )
    }
}
