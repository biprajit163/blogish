import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../UserContext.jsx';

function Login() {

    const {state, setState} = useContext(UserContext);

    return (
        <div>
            <h1>Login Page</h1>
            <p>Login... {state.login}</p>
        </div>
    );
}

export default Login;