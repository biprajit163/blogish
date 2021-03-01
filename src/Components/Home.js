import React from 'react';
import { UserContext } from '../UserContext.jsx';
import { useContext } from 'react';



function Home() {

    const {state, setState} = useContext(UserContext);

    return (
        <div className="Home">
            <h1>Home Page</h1>
            <p>Username... {state.username}</p>
        </div>
    );
}

export default Home;