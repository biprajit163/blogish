import React from 'react';
import { UserContext } from '../UserContext.jsx';
import { useContext } from 'react';

import BlogCard from './BlogCard.js';


function Home() {

    const {context, setContext} = useContext(UserContext);


    return (
        <div className="Home">
            <h1>Home Page</h1>
            <p>Blogish Api: {context.base_url}</p>

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