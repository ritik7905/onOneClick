import React from 'react'
import { NavLink } from 'react-router-dom'


const SignedOutLinks = () => {
    return (
        <>
            <ul className="right" style={{ display: "flex", gap: " 20px", marginRight: "20px" }}>
                <li><NavLink to='/signup' activeclassname="active">SignUp</NavLink></li>
                <li><NavLink to="/login" activeclassname="active">LogIn</NavLink></li>
            </ul>
        </>
    )
}

export default SignedOutLinks