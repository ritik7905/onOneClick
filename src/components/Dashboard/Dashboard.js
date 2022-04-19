import React from 'react'
import BlogLists from '../Demo/bloglists/BlogLists'

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { useNavigate } from 'react-router-dom';

const Dashboard = (props) => {

  const navigate = useNavigate()

  console.log(props);
  const { myBlogs, updateError, auth, profile } = props
  console.log(myBlogs);

  if (!auth.uid) {
    // console.log('you are not logged in');
    // window.location.href = "/login";
    navigate("/login")
  }

  return (
    <div className='container'>
      <BlogLists blogs={myBlogs} profiles = {profile} />
      <div className="red-text center">
        {updateError ? <p>{updateError}</p> : null}
      </div>
    </div>

  )
}

const mapStateToProps = (state) => {
  console.log(state)
  console.log(state.firestore.ordered.blogs)
  return {
    myBlogs: state.firestore.ordered.blogs,
    updateError: state.blog.updateError,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default compose(connect(mapStateToProps), firestoreConnect([
  {
    collection: 'blogs'
  }
]))(Dashboard);



// export default connect(mapStateToProps)(Dashboard);