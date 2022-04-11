import React from 'react'
import { NavLink } from 'react-router-dom'


const SignedOutLinks = () => {
    return (
        <>
            <ul className="right" style={{ display: "flex", gap: " 20px", marginRight: "20px" }}>
                <li><NavLink to='/signup' activeClassName="active">SignUp</NavLink></li>
                <li><NavLink to="/login" activeClassName="active">LogIn</NavLink></li>
            </ul>
        </>
    )
}

export default SignedOutLinks