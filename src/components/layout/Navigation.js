import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SignedInLink from './SignedInLink'
import { connect } from 'react-redux';
import SignedOutLinks from './SignedOutLinks'
// styles
import "./nav.scss"

const Navigation = (props) => {

    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLink profile = {profile} /> : <SignedOutLinks />;


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
                                {auth.isLoaded && links}
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    };
}

export default connect(mapStateToProps)(Navigation);