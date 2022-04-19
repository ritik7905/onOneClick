import React from 'react'
import { Link } from 'react-router-dom';
import BlogSummary from '../blogsummary/BlogSummary'
// styles
import "./style.scss"
const BlogLists = ({ blogs }) => {
  console.log(blogs);
  return (
    <div className='card_container'>
      {
        blogs && blogs.map((blog, id) => {
          return (
            <>
              <Link to={"/blog/" + blog.id} >
                <BlogSummary  blog={blog} key={id} />
              </Link>
            </>
          )
        })
      }
      {/* blogs && blogs.map(blog => <> <Link to={`/blog/` + blog.id}><BlogSummary key={blog.id} blog={blog} /></Link></>) */}
    </div>
  )
}

export default BlogLists