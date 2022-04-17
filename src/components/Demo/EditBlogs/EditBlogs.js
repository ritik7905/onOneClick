import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateBlog } from '../../../Redux/action/BlogAction';

import firebase from '../../FbConfig/fbConfig';
import { Button, Container, Form } from 'react-bootstrap';

function EditBlog(props) {
    // const [title, setTitle] = useState("");
    // const [content, setContent] = useState("");
    const { id } = useParams();
    // Redirect
    const navigate = useNavigate()
    // console.log(id);
    const [post, setPost] = useState({});



    useEffect(() => {
        if(id){
            const ref = firebase.firestore().collection('blogs').doc(id);
            ref.get().then((doc)=>{
                if(doc.exists){
                    const plan = doc.data();
                    setPost(plan);
                }else{
                    console.log("No such document found!");
                }
            });
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.updateBlog(post, id);
        // this.props.history.push("/");
        navigate("/")
    }

 

    return (
        <Container>
            <Form onSubmit={handleSubmit} >
                <h1>Update blog</h1>
                <Form.Group className="mb-3">
                    <Form.Label>Blog Title:</Form.Label>
                    <Form.Control type="text" name="title" value={post.title} placeholder="Update title" id='title' onChange={e => setPost({ ...post, title: e.target.value })}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Content:</Form.Label>
                    <Form.Control as="textarea" rows="3" value={post.content} id= 'content' onChange={e => setPost({ ...post, content: e.target.value })} name="content" placeholder="Update content" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Update Blog
                </Button>
            </Form>
        </Container>


    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateBlog: (blog, id) => {
            dispatch(updateBlog(blog, id))
        }
    }
}

export default connect(null, mapDispatchToProps)(EditBlog);
