import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import createBlog from '../../../Redux/action/BlogAction'
// styles
import "./style.scss"

const CreateBlog = (props) => {

    const [blogData, setBlogData] = useState({
        title: "",
        content: "",
    })

    const handleSubmit = (e) => {
        props.createBlog(blogData)
        e.preventDefault()
        console.log(blogData);
    }

    const handleChange = (e) => {
        setBlogData({
            ...blogData, [e.target.name]: e.target.value
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

const mapDispatchToProps = (dispatch)=>{
    return {
        createBlog: (blog)=>{
            dispatch(createBlog(blog))
        }
    }
}

export default connect(null, mapDispatchToProps)(CreateBlog);


// export default CreateBlog