import React from 'react';
import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../UserContext.jsx';
import { getCookie, setCookie, eraseCookie } from '../CookieMethods.js';
import axios from 'axios';

import BlogCard from './BlogCard.js';


function UserProfile() {

    const {context, setContext} = useContext(UserContext);
    const [user, setUser] = useState({});

    useEffect(() => {   
        const user_id = getCookie("user_id")

        axios.get(`${context.base_url}/users/${user_id}`)
            .then(res => {
                console.log(res.data);
                setUser(res.data);
            })

    }, []);


    return (
        <div className="UserProfile d-flex justify-content-between">
            <div className="profile-container">
                <div className="profile-image">
                    <img src="dfgdfg" alt="Picture goes here"/>
                    <h3>Profile Image</h3>
                </div>
                <div className="user-email">Email goes here</div>
                <div className="user-firstname">User Firstname</div>
                <div className="user-lastname">User Lastname</div>
                <div className="user-description">User Description</div>

                <button className="btn btn-dark">Update Profile</button>
                <button className="btn btn-dark">Delete Profile</button>
                
            </div>
            <div className="user-blogs-container">
                <div className="user-blogs d-flex justify-content-center">
                    <div className="create-blog">
                        <button className="btn btn-primary">Create A Blog</button>
                    </div>
                </div>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
            </div>
        </div>
    );
}

export default UserProfile;