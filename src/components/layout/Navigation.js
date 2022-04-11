import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SignedInLink from './SignedInLink'
import SignedOutLinks from './SignedOutLinks'
// styles
import "./nav.scss"

const Navigation = () => {

    const [logedIn, setLogedIn] = useState(true)
    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Nav className="me-auto">
                        <Link to="/" className='left'>Let's Know</Link>
                    </Nav>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='info'>
                        <Nav>
                            <div className="auth_links">
                                {!logedIn ? <SignedInLink /> : <SignedOutLinks />}
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation