import React from 'react';
import { UserContext } from '../UserContext.jsx';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { getCookie, setCookie, eraseCookie } from '../CookieMethods.js';
import axios from 'axios';


function Login() {

    const initialState = {
        username: "",
        password: "",
    }

    const {context, setContext} = useContext(UserContext);
    const [userInfo, setUserInfo] = useState(initialState);


    const getUser = (username, password) => {

        axios.get(`${context.base_url}/users`)
            .then(res => {
                const usersArr = res.data;

                if(usersArr.some(obj => obj.username === username && obj.password === password)) {
                    usersArr.forEach(obj => {
                        if(obj.username === username && obj.password === password) {
                            setCookie("user_id", obj.id);
                        }
                    });
                } else {
                    alert("Wrong username and password try again!");
                }
            })
    }


    const handleSubmit = event => {
        event.preventDefault();
        getUser(userInfo.username, userInfo.password);

        
        setUserInfo(initialState);
    }

    const handleChange = event => {
        const {id, value} = event.target;
        
        setUserInfo(prevState => {
            return({
                ...prevState,
                [id]: value,
            });
        })
    }

    return (
        <div className="Login d-flex">
            <div className="login-container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="login-card card">
                            <div className="card-title text-center">
                                <h2 className="login-title">Login Credentials</h2>
                                <p>Don't have an account? 
                                    <Link to="/signup" style={{
                                        textDecoration: "none",
                                        color: "rgb(223, 101, 20)",
                                    }}> Sign Up</Link>
                                </p>
                            </div>
                            <div className="card-body">
                                <form className="login-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input type="text" className="form-control" value={userInfo.username}  
                                        id="username" placeholder="Username" onChange={handleChange}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" value={userInfo.password} 
                                        id="password" placeholder="Password" onChange={handleChange}/>
                                    </div>

                                    <div className="d-flex flex-row align-items-center
                                    justify-content-between float-right">
                                        <button className="btn btn-success">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;