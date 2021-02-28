import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const base_url = 'http://127.0.0.1:8000'

    let newUser = {
      email: "a",
      username: "a",
      password: "a",
      firstname: "a",
      lastname: "a",
      description: "a",
      profile_picture: "https://picsum.photos/id/237/200/300"
    }

    axios.all([
      axios.post(`${base_url}/users`, newUser),
      axios.get(`${base_url}/users`)
    ]).then(resArr => {
      console.log(resArr[0])
      console.log(resArr[1].data)
    }).catch(err => console.log(err));

    
  }, []);

  return (
    <div className="App">
      <h1>Welcome Blogish!</h1>
    </div>
  );
}

export default App;
