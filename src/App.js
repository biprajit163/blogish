import "./App.css";
import { UserContext } from "./UserContext.jsx";
import { useState, useEffect } from "react";
import { Route, Link } from 'react-router-dom'; 

import Home from './Components/Home.js';
import Signup from './Components/Signup.js';
import Login from './Components/Login.js';
import UserProfile from './Components/UserProfile.js';
import BlogEditor from './Components/BlogEditor.js';
import UpdateUserBlog from './Components/UpdateUserBlog.js';



function App() {

  const [context, setContext] = useState({
    base_url: 'https://blogish-api.herokuapp.com',
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

        
        <UserContext.Provider value={{ context, setContext }}>
          <Route path="/home" render={() => (
            <Home/>
          )}/>

          <Route exact path="/update_blog/:id" render={(routerProps) => (
            <UpdateUserBlog match={routerProps.match}/>
          )}/>

          <Route path="/make_blog" component={BlogEditor}/>
          
          <Route path="/profile" component={UserProfile}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
        </UserContext.Provider>
      </main>
    </div>
  );
}

export default App;
