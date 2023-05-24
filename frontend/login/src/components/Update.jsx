import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from 'react-router';


const  Update =({xyza, List}) => {
  const navigate = useNavigate()
  const [user_name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  const inputImage = (event) => {
    setImage(event.target.files[0]);

    console.log(event.target.files[0])
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
      .patch(`http://127.0.0.1:8000/s/update/${xyza}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        // setData(res.data);
        msg();
        reload();
      }).catch((err) => console.log(err))

      navigate('/list')
  };

  return (
    <>
    {List}
    <div className="form">
        <h1>Update here </h1>
      <form>
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
        <button type="submit" onClick={senddata}>
          Update
        </button>
      </form>
    </div>
    </>
  );
};
  

export default Update