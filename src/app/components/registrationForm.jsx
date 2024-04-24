// RegistrationForm.js
import React, { useState } from "react";
import "../styles/form.css";
import axios from "axios";
const url = 'http://localhost:8085/api/kwye';

const RegistrationForm = () => {

  
  
  /*
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8085/api/kwye", {
        username: username,
        password: password,
      });
      console.log("Registration successful:", response.data);
      const isConfirmed = window.confirm(
        "Account created! Do you want to proceed to the home page?"
      );
      if (isConfirmed) {
        window.location.href = "/";
      } else {
        setUserName("");
        setPassword("");
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };
  */
  const [post, setPost ] = useState({
      username: '',
      password: ''
     
  })

  const handleInput = (event) => {
      setPost({...post, [event.target.name]: event.target.value})
  }

  function handleSubmit(event){
    event.preventDefault();

    axios.post(url,{post})
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h2>Register for a new account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            id="name"
            //value={post.username}
            //onChange={(e) => setUserName(e.target.value)}
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            //value={post.password}
            //onChange={(e) => setPassword(e.target.value)}
            onChange={handleInput}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
