import React from 'react';
import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../UserContext.jsx';
import { getCookie, setCookie, eraseCookie } from '../CookieMethods.js';
import { Link } from 'react-router-dom';
import axios from 'axios';

import UserBlogCard from './UserBlogCard.js';
import BlogCard from './BlogCard.js';


function UserProfile() {
    
    const {context, setContext} = useContext(UserContext);
    const [user, setUser] = useState({});
    const [userBlogs, setUserBlogs] = useState([]);




    useEffect(() => { 
        const user_id = getCookie("user_id")
        console.log(user_id)
        
        axios.get(`${context.base_url}/users/${user_id}`)
            .then(res => {
                setUser(res.data);
            })

        axios.get(`${context.base_url}/blogs`)
            .then(res => {
                let myBlogs = []
                for(let i=0; i < res.data.length; i++) {
                    if(res.data[i].user === Number(user_id)) {
                        myBlogs.push(res.data[i])
                    }
                }
                setUserBlogs(myBlogs)
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
                                    <button
                                        type="button" 
                                        className="btn btn-primary"
                                        data-toggle="modal"
                                        data-target="#addProfilePic"
                                    >Change Picture</button>
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

                            <div className="modal fade" id="addProfilePic">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h3>Add A Profile Pic!</h3>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="form-group">
                                                    <input 
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="add an image url"
                                                        value=""
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" class="btn btn-secodary" data-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Add Picture</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-lg-8">
                            <div className="user-blogs-container">
                                <div className="user-blogs">
                                    <div className="create-blog">
                                        <Link to="/make_blog">
                                            <button className="btn btn-primary">Create A Blog</button>
                                        </Link>
                                    </div>
                                </div>
                                {
                                    userBlogs.map((blog, i) => {
                                        return(
                                            <div className="row" key={i}>
                                                <UserBlogCard blog={blog} context={context}/>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default UserProfile;