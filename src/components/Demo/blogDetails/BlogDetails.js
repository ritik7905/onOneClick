import React from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import { useParams } from 'react-router-dom';
import { updateBlog, deleteBlog } from '../../../Redux/action/BlogAction';
import {useNavigate} from "react-router-dom"
// styles
import "./style.scss"

function BlogDetails(props) {
    const {id} = useParams();
    const navigate = useNavigate()
    const handleDelete = (e) => {
        e.preventDefault();
        props.deleteBlog(id);
        navigate("/")
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        // console.log(props.project);
        // props.history.push("/edit/" + id);
        navigate("/edit/" + id)
    }

    console.log(id);
    console.log(props);
    
    const {blogs} = props;
    console.log(blogs);
    
    if(blogs){
        const {title, content, authorFirstName, authorLastName, createdAt} = blogs[id];
        console.log(title, content, authorFirstName, authorLastName, createdAt);
        return (
            <div className='container section project-details'>
                <div className='card'>
                    <div className='card-body'>
                        <span className='card-title'>
                            {title} 
                        </span>
                        <p>{content}</p>
                    </div>
                    <div className='card-details'>
                        <p>Posted by -- {authorFirstName} {authorLastName}  </p>
                        <p>Created at -- </p>
                        <button onClick={handleDelete}>Delete</button>{" "} | {" "}<button onClick={handleUpdate}>Update</button>{" "} | {" "}<button onClick={(_) => {
                            window.location.href = "/";
                        }}>All Plans</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center text-warning">
                <p>Loading project...</p>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log(state.firestore.data.blogs);
    console.log(state);
    return {
        blogs: state.firestore.data.blogs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteBlog : (id) => {
            dispatch(deleteBlog(id));
        },
        updateBlog : (blog, id) => {
            dispatch(updateBlog(blog, id));
        }
    }
}
  
export default compose(connect(mapStateToProps, mapDispatchToProps), firestoreConnect())(BlogDetails);