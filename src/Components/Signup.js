import React from 'react';
import { useState, useEffect } from 'react';

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

    const handleSubmit = event => {
        event.preventDefault();
        console.log(newUser);
        console.log(pwd);

        if(newUser.password === pwd) {
            console.log(true)
        } else {
            console.log(false)
        }

        setNewUser(initialState);
        setPwd("");
    }

    const handleUserChange = event => {
        const {id, value} = event.target

        setNewUser(prevState => ({
            ...prevState,
            [id]: value,
        }))
    }

    const handlePwdChange = event => {
        setPwd(event.target.value)
    }

    return (
        <div className="Signup">
            <div className="signup-container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="signup-card card">
                            <div className="card-title text-center">
                                <h2 className="signup-title">Register</h2>
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