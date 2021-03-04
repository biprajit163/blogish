import axios from 'axios';
import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../UserContext.jsx';
import { Link } from 'react-router-dom';


function Signup() {

    const initialState = {
        email: "",
        username: "",
        password: "",
        firstname: "",
        lastname: "",
    }

    const [newUser, setNewUser] = useState(initialState);
    const [pwd, setPwd] = useState("");

    const {context, setContext} = useContext(UserContext);


    function createUser(password, pwd) {
        if(password === pwd) {
            axios.post(`${context.base_url}/users`, newUser)
        } else {
            alert("Password did not match!")
        }
    }

    const handleSubmit = event => {
        event.preventDefault();

        createUser(newUser.password, pwd);

        setNewUser(initialState);
        setPwd("");
    }

    const handleUserChange = event => {
        const {id, value} = event.target

        setNewUser(prevState => {
            return({
                ...prevState,
                [id]: value,
            });
        })
    }

    const handlePwdChange = event => {
        setPwd(event.target.value)
    }

    return (
        <div className="Signup d-flex">
            <div className="signup-container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="signup-card card">
                            <div className="card-title text-center">
                                <h2 className="signup-title">Make An Account</h2>
                                <p>Already have an account? 
                                    <Link to="/login" style={{
                                        textDecoration: "none",
                                        color: "rgb(116, 158, 33)",
                                    }}> Login</Link>
                                </p>
                            </div>
                            <div className="card-body">
                                <form className="signup-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input type="text" className="form-control" value={newUser.firstname} 
                                        id="firstname" placeholder="First Name" onChange={handleUserChange}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" value={newUser.lastname}
                                        id="lastname" placeholder="Last Name" onChange={handleUserChange}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" value={newUser.email}
                                        id="email" placeholder="Email Address" onChange={handleUserChange}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" value={newUser.username}
                                        id="username" placeholder="Username" onChange={handleUserChange}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" value={newUser.password}
                                        id="password" placeholder="Password" onChange={handleUserChange}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" value={pwd}
                                        id="pwd" placeholder="Confirm Password" onChange={handlePwdChange}/>
                                    </div>

                                    <div className="d-flex flex-row align-items-center 
                                    justify-content-between float-right">
                                        {/* <Link to="/profile">
                                        </Link> */}
                                        <button className="btn btn-success">Create Account</button>
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

export default Signup;