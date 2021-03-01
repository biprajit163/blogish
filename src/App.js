import "./App.css";
import axios from "axios";
import { UserContext } from "./UserContext.jsx";
import { useState, useEffect } from "react";

import Home from './Components/Home.js';
import Login from './Components/Login.js';



function App() {
  const base_url = 'https://blogish-api.herokuapp.com'

  const [state, setState] = useState({
    username: 'Biprajit',
    login: 'bips1996',
  });

  return (
    <div className="App">
      <h1>Welcome Blogish!</h1>
      <UserContext.Provider value={{ state, setState }}>
        <Home/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
