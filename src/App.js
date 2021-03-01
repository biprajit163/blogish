import "./App.css";
import axios from "axios";
import { UserContext } from "./UserContext.jsx";
import { useState, useEffect } from "react";
import { Route, Link } from 'react-router-dom'; 

import Home from './Components/Home.js';
import Login from './Components/Login.js';



function App() {
  const base_url = 'https://blogish-api.herokuapp.com'

  const [state, setState] = useState({
    username: 'blogish_user',
    login: 'blogish_login',
  });

  return (
    <div className="App">
      <header>
        <Link to="/home"/>
        <Link to="/login"/>
        <Link to="/" />
      </header>

      <main>
        <Route exact path="/" render={() => {
          return(
            <h1>Welcome Blogish!</h1>
          );
        }}/>

        <UserContext.Provider value={{ state, setState }}>
          <Route path="/home" render={() => (
            <Home/>
          )}/>
          
          <Route path="/login" render={() => (
            <Login/>
          )}/>
        </UserContext.Provider>
      </main>
    </div>
  );
}

export default App;
