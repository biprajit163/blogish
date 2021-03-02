import React from 'react';
import { UserContext } from '../UserContext.jsx';
import { useContext } from 'react';
import * as Icon from 'react-bootstrap-icons';

import BlogCard from './BlogCard.js';


function Home() {

    const {context, setContext} = useContext(UserContext);


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
                        <form className="search-form input-group">
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="Search for a Blog"
                            />
                            <button className="search-button btn-secondary">
                                <Icon.Search/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>


            <div className="blogs-container">
                <div class="row">
                    <div class="col-md-4">
                        <BlogCard/>
                    </div>
                    <div class="col-md-4">
                        <BlogCard/>
                    </div>
                    <div class="col-md-4">
                        <BlogCard/>
                    </div>
                    <div class="col-md-4">
                        <BlogCard/>
                    </div>
                    <div class="col-md-4">
                        <BlogCard/>
                    </div>
                    <div class="col-md-4">
                        <BlogCard/>
                    </div>
                    <div class="col-md-4">
                        <BlogCard/>
                    </div>
                    <div class="col-md-4">
                        <BlogCard/>
                    </div>
                    <div class="col-md-4">
                        <BlogCard/>
                    </div>
                </div>
            </div>

    
        </div>
    );
}

export default Home;