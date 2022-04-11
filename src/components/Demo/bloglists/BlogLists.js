import React from 'react'
import BlogSummary from '../blogsummary/BlogSummary'
// styles
import "./style.scss"
const BlogLists = ({ blogs }) => {
  console.log(blogs);
  return (
    <div className='card_container'>
      {
        blogs && blogs.map(blog => <BlogSummary key={blog.id} blog={blog} />)
      }

    </div>
  )
}

export default BlogLists