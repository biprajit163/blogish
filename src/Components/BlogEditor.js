
import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../UserContext.jsx'; 
import EditorContext from '../EditorContext.jsx';
import { setCookie, getCookie, eraseCookie } from '../CookieMethods.js';
import styled from 'styled-components';
import EditorResult from './BlogEditor_Components/EditorResult.jsx';
import axios from 'axios';


const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BlogTitle = styled.div`
    font-size: 25px;
    font-weight: 700;
    font-family: "Lato", sans-serif;
    margin-bottom: 1em;
`;

const MkTitle = styled.div`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 1em;
    padding: 8px 0;
    border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  font-size: 24px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 13px;
  border-right: 1.5px solid rgba(15, 15, 15, 0.4);
  font-family: "Lato", sans-serif;
`;

const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;



function BlogEditor(props) {

    const {context, setContext} = useContext(UserContext);

    const [userId, setUserId] = useState(getCookie("user_id"))
    const [blogTitle, setBlogTitle] = useState("");
    const [blogImage, setBlogImage] = useState("");
    const [markdownTxt, setMarkdownTxt] = useState("");


    const blogBody = {
        markdownTxt,
        setMarkdownTxt,
    }

    function handleSubmit(event) {
        event.preventDefault()

        const blogObj = {
            user: userId,
            title: blogTitle,
            image: blogImage,
            body: markdownTxt,
        }

        console.log(blogObj)

        axios.post(`${context.base_url}/blogs`, blogObj)
            .then(res => console.log(res))
            .catch(err => console.log(err));

        setBlogTitle("");
        setBlogImage("");
        setMarkdownTxt("");
    }

    const titleChange = e => {
        setBlogTitle(e.target.value)
    }

    const imageChange = e => {
        setBlogImage(e.target.value)
    }

    function markdownChange(event) {
        const newVal = event.target.value;
        setMarkdownTxt(newVal);
    }


    return (
        <div className="BlogEditor">
            <EditorContext.Provider value={blogBody}>
                <AppContainer>
                    <BlogTitle>Make A Blog</BlogTitle>
                    <div className="blog-features">
                        <form className="blog-submit" onSubmit={handleSubmit}>
                            <input 
                                type="text"
                                placeholder="Blog Title"
                                id="title"
                                value={blogTitle}
                                onChange={titleChange}
                            />
                            <input 
                                type="text"
                                placeholder="Blog Image"
                                id="image"
                                value={blogImage}
                                onChange={imageChange}
                            />
                            <button type="submit" className="btn btn-primary">Submit Blog</button>
                        </form>
                    </div>
                    <EditorContainer>
                        <Container>
                            <MkTitle>Markdown Text</MkTitle>
                            <TextArea onChange={markdownChange}/>
                        </Container>
                        <EditorResult/>
                    </EditorContainer>
                </AppContainer>
            </EditorContext.Provider>
        </div>
    );
}

export default BlogEditor;