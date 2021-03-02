import React from 'react';

function BlogCard({blogImg, blogTitle}) {
    return (
        <div className="BlogCard">
            <div className="card">
                <img className="card-img" 
                src={blogImg} alt="Blog Image"/>
                <div className="card-body">
                    <h4 className="card-title">{blogTitle}</h4>
                    <p className="card-text">Author</p>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;