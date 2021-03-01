import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [comments, setComments] = useState([]);
  const [user_id, setUserId] = useState(null);
  const [blog_id, setBlogId] = useState(null);
  const [comment_id, setCommentId] = useState(null);

  let userObj = {
    email: "bob@email",
    username: "",
    password: "a",
    firstname: "a",
    lastname: "a",
    description: "a",
    profile_picture: "",
  }

  let blogObj = {
    user: null,
    title: "A New Blog",
    image: "idk",
    body: "This is a Blog",
  }

  let commentObj = {
    blog: 2,
    user: 7,
    text: "First comment with frontend"
  }

  useEffect(() => {
    const base_url = 'http://127.0.0.1:8000'

    


    // axios
    //   .post(`${base_url}/users`, userObj)
    //   .then(res => {
    //     console.log(res.data)
    //   })

    axios
      .get(`${base_url}/users`)
      .then(res => {
        console.log(res.data)
        setUsers(res.data)
        setUserId(res.data[0].id);

        setBlogs(res.data[0].blogs)
      })


    // axios
    //   .delete(`http://127.0.0.1:8000/blogs/2`)
    //   .then(res => console.log(res));
    
    // axios
    //   .post(`${base_url}/blogs`, blogObj)
    //   .then(res => console.log(res));

    // axios
    //   .post(`${base_url}/comments`, commentObj)
    //   .then(res => console.log(res.data));

    

  }, []);

  


  return (
    <div className="App">
      <h1>Welcome Blogish!</h1>
    </div>
  );
}

export default App;
