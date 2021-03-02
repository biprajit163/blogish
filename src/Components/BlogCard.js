import React from 'react';

function BlogCard() {
    return (
        <div className="BlogCard">
            <div 
                class="card" 
                style={{ 
                    width: '18rem',
                    margin: '10px' 
                }}
            >
                <img class="card-img" 
                src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/pasta.jpg" alt="Blog Image"/>

                <div class="card-body">
                    <h4 class="card-title">Blog Title</h4>
                    <p class="card-text">Author</p>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;