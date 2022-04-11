import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

// styles
import "./styles.scss"

const Signup = () => {

    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <div className='signup'>
            <Container>
                <h1>Sign Up</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control type="text" name="firstName" placeholder="Enter first name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control type="text" name="lastName" placeholder="Enter last name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="text" name="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="text" name="password" placeholder="Enter password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        SignUp
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Signup