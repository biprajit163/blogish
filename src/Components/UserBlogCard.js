import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../UserContext.jsx';
import { Link } from 'react-router-dom';
import axios from 'axios';


function UserBlogCard({ blog, context }) {

    function deleteBlog() {
        axios.delete(`${context.base_url}/blogs/${blog.id}`)
        window.location.reload();
    }


    return (
        <div className="UserBlogCard">
            <div className="card">
                <img className="card-img" 
                src={blog.image} alt="Blog Image"/>
                <div className="card-body">
                    <h4 className="card-title">{blog.title}</h4>
                    <p className="card-text">Author</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-secondary">
                        <Link to={`/update_blog/${blog.id}`} style={{ textDecoration: "none", color: "white" }}>
                            Edit
                        </Link>
                    </button>
                    <button className="btn btn-danger" onClick={deleteBlog}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default UserBlogCard;