import React from 'react'
import moment from 'moment';
import "./style.scss"
import { connect } from 'react-redux';

const BlogSummary = (props) => {
    const { profile, blog, blogs } = props
    console.log(blog);
    console.log(profile);
    return (
        <>
            <div className="card blogCard">
                <div className="card-body">
                    <span className="card-title">{blog.title}</span>
                    <p className='name'>Posted by {blog.authorFirstName} {blog.authorLastName}</p>
                    <p className="time">{moment(blog.createdAt.toDate()).calendar()}</p>
                </div>
            </div>
        </>
    )
}


const mapStateToProps = (state) => {
    console.log(state.firestore.ordered.blogs);
    return {
        profile: state.firebase.profile
    }


}

export default connect(mapStateToProps)(BlogSummary);

// export default BlogSummary