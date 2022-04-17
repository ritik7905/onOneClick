import React from 'react'
import BlogLists from '../Demo/bloglists/BlogLists'

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends React.Component {

  render() {

    console.log(this.props);
    const { myBlogs, updateError, auth } = this.props
    console.log(myBlogs);

    if (!auth.uid) {
      // console.log('you are not logged in');
      window.location.href = "/login";
    }

    return (
      <div className='container'>
        <BlogLists blogs={myBlogs} />
        <div className="red-text center">
          {updateError ? <p>{updateError}</p> : null}
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  console.log(state.firestore.ordered.blogs)
  return {
    myBlogs: state.firestore.ordered.blogs,
    updateError: state.blog.updateError,
    auth : state.firebase.auth
  }
}

export default compose(connect(mapStateToProps), firestoreConnect([
  {
    collection: 'blogs'
  }
]))(Dashboard);



// export default connect(mapStateToProps)(Dashboard);