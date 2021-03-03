import "./App.css";
import { UserContext } from "./UserContext.jsx";
import { useState, useEffect } from "react";
import { Route, Link } from 'react-router-dom'; 

import Home from './Components/Home.js';
import Signup from './Components/Signup.js';
import Login from './Components/Login.js';


function App() {
  const base_url = 'https://blogish-api.herokuapp.com'

  const [context, setContext] = useState({
    base_url: 'http://127.0.0.1:8000',
    user_id: null,
    blog_id: null,
  });

  return (
    <div className="App">
      <header>
        <Link to="/" />
        <Link to="/home"/>
      </header>

      <main>
        <Route exact path="/" render={() => {
          return(
            <h1>Welcome To Blogish!</h1>
          );
        }}/>

        <Route path="/signup" component={Signup}/>

        <UserContext.Provider value={{ context, setContext }}>
          <Route path="/home" render={() => (
            <Home/>
          )}/>
          
          <Route path="/login" component={Login}/>
        </UserContext.Provider>
      </main>
    </div>
  );
}

export default App;
