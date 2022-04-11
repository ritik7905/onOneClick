import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const SignedInLink = () => {
    return (
        <>
            <ul className="right">
                <li><NavLink to='/' activeclassname="active">Blogs Blog</NavLink></li>
                <li><NavLink to='/createBlog' activeclassname="active">New Blog</NavLink></li>
                <li><Link to='/' >DP</Link>
                </li>
                <li><Link to='/' activeclassname="active" style={{color: "red"}} >Log Out</Link></li>
            </ul>
        </>
    )
}

export default SignedInLink