import React from 'react';
import { UserContext } from '../UserContext.jsx';
import { useContext } from 'react';

import BlogCard from './BlogCard.js';


function Home() {

    const {context, setContext} = useContext(UserContext);

    let arr = Array(9)

    return (
        <div className="Home">
            <h1>Home Page</h1>
            <p>Blogish Api: {context.base_url}</p>

            <div className="blogs-container">
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
            </div>

    
        </div>
    );
}

export default Home;