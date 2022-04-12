import React from 'react'
import "./style.scss"

const BlogSummary = ({blog}) => {
    console.log(blog);
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <span className="card-title">{blog.title}</span>
                    <p className='name'>Posted by Ritik Sharma</p>
                    <p className="time">3rd September, 2am</p>
                </div>
            </div>
        </>
    )
}

export default BlogSummary