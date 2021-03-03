import React from 'react';
import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../UserContext.jsx';
import { getCookie, setCookie, eraseCookie } from '../CookieMethods.js';
import axios from 'axios';

import BlogCard from './BlogCard.js';


function UserProfile() {
    // const user_id = getCookie("user_id")
    
    const {context, setContext} = useContext(UserContext);
    const [user, setUser] = useState({});

    useEffect(() => { 
        const user_id = getCookie("user_id")
        console.log(user_id)
        
        axios.get(`${context.base_url}/users/${user_id}`)
            .then(res => {
                console.log(res.data);
                setUser(res.data);
            })

    }, []);

    function logout() {
        eraseCookie("user_id")
        window.location.reload();
    }

    return (
        <div className="UserProfile d-flex">
            {getCookie("user_id") === null ? null : (
                <>
                    <div className="user-profile-container row justify-content-center">
                        <div className="col-lg-4">
                            <div className="profile-container">
                                <div className="profile-image">
                                    <img src={`${user.profile_picture}`} alt="Picture goes here" className="profile-image-cover"/>
                                    <h3>{user.username}</h3>
                                    <button className="btn btn-primary">Change Picture</button>
                                </div>
                                <div className="user-email">{user.email}</div>
                                <div className="user-name">{user.firstname} {user.lastname}</div>
                                <div className="user-description">{user.description}</div>

                                <div className="profile-buttons">
                                    <button className="btn btn-dark">Update Profile</button>
                                    <button className="btn btn-dark">Delete Profile</button>
                                    <button className="btn btn-danger" onClick={logout}>Logout</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="user-blogs-container">
                                <div className="user-blogs">
                                    <div className="create-blog">
                                        <button className="btn btn-primary">Create A Blog</button>
                                    </div>
                                </div>
                                <BlogCard/>
                                <BlogCard/>
                                <BlogCard/>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default UserProfile;