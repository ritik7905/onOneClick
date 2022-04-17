import React, { Component } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { connect } from 'react-redux';
import { signIn } from '../../Redux/action/authAction';
// Styles
import "./styles.scss"

class Signin extends Component {

    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
    }

    //Form Submit
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signIn(this.state);
        console.log(this.state);
        // window.location.href = "/";
    }

    // Form Change
    handleChange = (e) => {
        // console.log(e);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { authError } = this.props
        return (
            <div className='signin'>
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <h1>Log In</h1>
                        <Form.Group className="mb-3">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" value={this.state.email} onChange={this.handleChange} name="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter password" />
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
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);