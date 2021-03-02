import React from 'react';
import { UserContext } from '../UserContext.jsx';
import { useContext, useEffect, useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import axios from 'axios';

import BlogCard from './BlogCard.js';


function Home() {

    const {context, setContext} = useContext(UserContext);

    const [blogs, setBlogs] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        axios.get(`${context.base_url}/blogs`)
            .then(res => {
                console.log(res.data);
                setBlogs(res.data);
            })
    }, []);

    function handleSubmit(event) {
        event.preventDefault();
        console.log(search)
        setSearch("")
    }

    function handleChange(event) {
        setSearch(event.target.value)
    }

    return (
        <div className="Home">
            <h1>Home Page</h1>
            <p>Blogish Api: {context.base_url}</p>
            
            <div className="blog-searchbar">
                <div className="row">
                    <div className="col-md-12">
                        <h3>Blog Searchbar</h3>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <form className="search-form input-group" onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="Search for a Blog"
                                value={search}
                                onChange={handleChange}
                            />
                            <button className="search-button btn-secondary">
                                <Icon.Search/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>


            <div className="blogs-container">
                <div className="row">
                    {
                        blogs.map((blog, i) => {
                            return(
                                <div className="col-md-4" key={i}>
                                    <BlogCard blogImg={blog.image} blogTitle={blog.title} />
                                </div>
                            );
                        })
                    }
                </div>
            </div>

    
        </div>
    );
}

export default Home;