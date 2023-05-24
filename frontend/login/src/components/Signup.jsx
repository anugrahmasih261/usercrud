import React from "react";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router';
import Signupka from '../assets/css/Signupka.css'


const Signup = () => {
  const navigate = useNavigate()

  const [user_name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  const inputImage = (event) => {
    setImage(event.target.files[0]);

    // console.log(event.target.files[0])
  };

  const inputUserName = (event) => {
    setUserName(event.target.value);
  };

  const inputEmail = (event) => {
    setEmail(event.target.value);
  };

  const inputPassword = (event) => {
    setPassword(event.target.value);
  };

  const [data, setData] = useState("");

  const msg = () => {
    alert("Sucess..");
  };

  const reload = () => {
    window.location.reload();
  };

  const senddata = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", user_name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", image);
    axios
      .post("http://127.0.0.1:8000/s/add/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        msg();
        reload();
        navigate('/')
      });
  };

  return (
    <div className="form">
      <form encType="multipart/form-data">
        <label>Username</label>
        <input
          id="f"
          type="text"
          placeholder="username"
          onChange={inputUserName}
          required
        />{" "}
        <br />
        <label>Email</label>
        <input
          id="f"
          type="email"
          placeholder="email"
          onChange={inputEmail}
          required
        />{" "}
        <br />
        <label>Password</label>
        <input
          id="f"
          type="password"
          placeholder="password"
          onChange={inputPassword}
          required
        />{" "}
        <br />
        <label htmlFor="image">Image</label>
        <input
          id="f"
          type="file"
          name="image"
          encType="multipart/form-data"
          placeholder="upload Image "
          onChange={inputImage}
          required
        />
        <br />
        <button type="button" onClick={senddata}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
