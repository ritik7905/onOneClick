import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { connect } from 'react-redux';
import { signIn } from '../../Redux/action/authAction';
import { useNavigate } from 'react-router-dom';
// Styles
import "./styles.scss"

const Signin = (props) => {
    const navigate = useNavigate();
    const { authError, auth } = props
    const [state, setState] = useState({
        email: "",
        password: ""
    })


    if (auth.uid) {
        // console.log('you are not logged in');
        navigate("/")
    }

    //Form Submit
    const handleSubmit = (e) => {
        e.preventDefault()
        props.signIn(state);
        console.log(state);
        props.history.push('/')
    }


    // Form Change
    const handleChange = (e) => {
        // console.log(e);
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className='signin'>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <h1 className='title'>Log In</h1>
                    <Form.Group className="mb-3">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" value={state.email} onChange={handleChange} name="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" name="password" value={state.password} onChange={handleChange} placeholder="Enter password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>

                </Form>

                <div className="red-text center">
                    {authError ? <p>{authError}</p> : null}
                </div>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state.firebase.auth);
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);