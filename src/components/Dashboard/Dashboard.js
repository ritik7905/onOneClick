import React, { useState } from 'react'
import BlogLists from '../Demo/bloglists/BlogLists'

import { connect } from 'react-redux'

const Dashboard = (props) => {
  const [userLogin, setUserLogin] = useState(false)
  const { myBlogs } = props
  console.log(myBlogs);
  return (
    <div>
      {
        !userLogin ? <BlogLists blogs={myBlogs} /> : <div>Login</div>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state.blog.blogs)
  return {
    myBlogs: state.blog.blogs
  }
}

export default connect(mapStateToProps)(Dashboard);