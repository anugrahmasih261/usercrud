import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import signin from '../assets/css/signin.css'

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/s/check_user/', {
        username: username,
        password: password,
      });
      setResult(response.data.exists);
      if (response.data.exists) {
        navigate('/list');
      }
    } catch (error) {
      console.error(error);  
    }
  };

  const signup = () =>{
    navigate('/signup')
  }

  return (
    <div className="signin-form">
      <form onSubmit={handleSignIn}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Sign In</button> <br/>
        <button onClick={signup} type="submit">Not a user Signup here</button>

      </form>
      {result !== null && (
        <p>{result ? 'User found' : 'User not found'}</p>
      )}
    </div>
  );
}

export default SignIn;
