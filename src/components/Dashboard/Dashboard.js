import React from 'react'
import BlogLists from '../Demo/bloglists/BlogLists'

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends React.Component {

  render() {
    const { myBlogs } = this.props
    console.log(myBlogs);
    return (
      <div>
        <BlogLists blogs={myBlogs} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  console.log(state.firestore.ordered.blogs)
  return {
    myBlogs: state.firestore.ordered.blogs
    // myBlogs: state.blog.blogs
  }
}

export default compose(connect(mapStateToProps), firestoreConnect([
  {
    collection: 'blogs'
  }
]))(Dashboard);



// export default connect(mapStateToProps)(Dashboard);