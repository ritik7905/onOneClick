import React from 'react'
import { Container } from 'react-bootstrap'
// styles
import "./style.scss"

const BlogDetails = () => {
    // console.log(blog);
    return (
        <>
            <Container>
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">Project Title</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, ut explicabo omnis officia reprehenderit mollitia, aperiam, voluptatem molestias quod temporibus exercitationem recusandae officiis ullam labore illum dolorem esse error iusto?</p>
                    </div>
                    <div className="card-action gret lighten-4 grey-text">
                        <div>Posted by Ritik Sharma</div>
                        <div>2nd September, 2am</div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default BlogDetails