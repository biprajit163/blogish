
import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../UserContext.jsx';
import { getCookie, setCookie, eraseCookie } from '../CookieMethods.js';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';


function UpdateUserBlog({ match }) {

    const { context, setContext } = useContext(UserContext);

    const [blog, setBlog] = useState({});
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");

    useEffect(() => {

        axios.get(`${context.base_url}/blogs/${match.params.id}`)
            .then(res => {
                setBlog(res.data)
            })

    }, []);

    function handleSubmit(event) {
        event.preventDefault()

        let updateObj = {
            id: match.params.id,
            user: getCookie("user_id"),
            title: title,
            image: image,
            body: body,
        }

        console.log(updateObj);
        axios.put(`${context.base_url}/blogs/${match.params.id}`, updateObj)

        setTitle("");
        setImage("");
        setBody("");
    }

    const titleChange = e => {
        setTitle(e.target.value)
    }
    const imageChange = e => {
        setImage(e.target.value)
    }
    const bodyChange = e => {
        setBody(e.target.value)
    }


    return (
        <div className="UpdateUserBlog">
            <h1>Blog Update {blog.id}</h1>
            <h3>Title: {blog.title}</h3>


            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Blog Title"
                        id="title"
                        value={title}
                        onChange={titleChange}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Blog Image"
                        id="image"
                        value={image}
                        onChange={imageChange}
                    />
                </div>
                <div className="form-group">
                    <textarea 
                        type="text"
                        className="form-control"
                        placeholder="Blog Body"
                        id="body"
                        value={body}
                        onChange={bodyChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update form</button>
            </form>

            <h2></h2>
            <p></p>
        </div>
    );
}

export default UpdateUserBlog;
