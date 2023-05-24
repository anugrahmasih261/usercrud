import React, { useState } from 'react';
import search from '../assets/css/search.css'

const  SignupSearch = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([0]);

  const handleSearch = (event) => {
    event.preventDefault();
    fetch(`http://127.0.0.1:8000/s/search/?query=${query}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
      console.log(data.results)
  };

  return (

    <div className='container'>
      <h className="title">Welcome to Masih Search engine</h>
      <form onSubmit={handleSearch}>
        <label>
          <h id="tee">Search Here:</h>
          <input id='see' type="text" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Created by Masih type here!" />
        </label>
        <button className='btn' type="submit">Search</button>
      </form>
      { data && data.results && data.results.length > 0 && data.results.map((data) => (
        <div key={data.id}>
          <p>Id: {data.id}</p>
          <p>Username: {data.username}</p>
          <p>Email: {data.email}</p>
          <p>Password: {data.password}</p>
          <img src={data.image} alt={data.username} />
        </div>
      ))}
    </div>
  );
}


export default SignupSearch
