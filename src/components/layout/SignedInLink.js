import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../Redux/action/authAction';

const SignedInLink = (props) => {
    const { signoutMessage } = props;
    return (
        <>

            <p className='text-warning'>{signoutMessage}</p>
            <ul className="right">
                <li><NavLink to='/' activeclassname="active">All Blogs</NavLink></li>
                <li><NavLink to='/createBlog' activeclassname="active">New Blog</NavLink></li>
                <li><Link to='/' style={{color: "white", backgroundColor: "blueviolet", padding: "10px", borderRadius :"50px"}} >{props.profile.initials}</Link>
                </li>
                <li><a onClick={props.signOut} style={{ color: "red" , cursor: "pointer" }} >Log Out</a></li>
            </ul>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        signoutMessage: state.auth.signoutMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLink);