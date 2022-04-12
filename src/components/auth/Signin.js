import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import "./styles.scss"

const Signin = () => {
    const [loginInfo, setLogInInfo] = useState({
        email: "", password: ""
    })


    //Form Submit
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(loginInfo);
    }

    // Form Change
    const handleChange = (e) => { setLogInInfo({ ...loginInfo, [e.target.name]: e.target.value }) }


    return (
        <div className='signin'>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <h1>Log In</h1>
                    <Form.Group className="mb-3">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" value={loginInfo.email} onChange={handleChange} name="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" name="password" value={loginInfo.password} onChange={handleChange} placeholder="Enter password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Signin