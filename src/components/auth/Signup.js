import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { signUp } from '../../Redux/action/authAction'
import { useNavigate } from 'react-router-dom'


import { connect } from 'react-redux'

// styles
import "./styles.scss"

const Signup = (props) => {

    const {auth} = props;
    const navigate = useNavigate();

    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    if (auth.uid) {
        // console.log('you are not logged in');
        navigate("/")
    }
    // form submit
    const handleSubmit = (e) => {
        e.preventDefault()
        props.signUp(state);
        console.log(state);

    }
    // handle change
    const handleChange = (e) => {
        setState({
            ...state, [e.target.name]: e.target.value
        })
    }

    return (
        <div className='signup'>
            <Container>
                <Form onSubmit={handleSubmit}>
                <h1 className='title'>Sign Up</h1>
                    <Form.Group className="mb-3">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control type="text" name="firstName" value={state.firstName} onChange={handleChange} placeholder="Enter first name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control type="text" name="lastName" value={state.lastName} onChange={handleChange} placeholder="Enter last name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="text" name="email" value={state.email} onChange={handleChange} placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="text" name="password" value={state.password} onChange={handleChange} placeholder="Enter password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        SignUp
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => {
            dispatch(signUp(newUser))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);