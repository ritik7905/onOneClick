import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
// styles
import "./style.scss"

const CreateBlog = () => {

    const [blogData, setBlogData] = useState({
        title: "",
        content: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        setBlogData({
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className='create_blog'>
            <Container>
                <Form onSubmit={handleSubmit} >
                    <h1>Create Blog</h1>
                    <Form.Group className="mb-3">
                        <Form.Label>Blog Title:</Form.Label>
                        <Form.Control type="text" name="title" value={blogData.title} placeholder="Enter title" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Content:</Form.Label>
                        <Form.Control as="textarea" rows="3" value={blogData.content} onChange={handleChange} name="content" placeholder="Enter content" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Create
                    </Button>
                </Form>
            </Container>

        </div>
    )
}

export default CreateBlog