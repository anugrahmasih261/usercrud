import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react';
import list from '../assets/css/list.css'
import { useNavigate } from 'react-router';
import User from '../assets/img/user.svg'

function List({xyzb}) {

  const navigate = useNavigate()

  const xyz = (id) =>{
    xyzb(id)
    navigate('update')
  }

  const [age, setage] = useState('')
  const [abc, setAbc] = useState('')


  useEffect(() => {
    const fetchdata = () =>{
      axios.get('http://127.0.0.1:8000/s/')
      .then((res) =>{
        console.log(res.data);
        setage(res.data);
      })
    }
    fetchdata();
    setAbc('2')
  },[abc])

  

  const msg = () =>{
    alert('Deleted sucessfully...')
  }

  const reload = () =>{
    window.location.reload()
  }

  const handleDelete = (id) =>{
    axios.delete(`http://127.0.0.1:8000/s/delete/${id}/`).then(() => console.log('deleted...'));
    setAbc('1');
    msg();
    reload();
};

// const handleLike = () =>{
//   const [likes, setLikes] = useState(0);
// }

  return (
    <div className='App'>
      {age.results && age.results.length >0 && age.results.map((a) =>(<div className='box'>
        <img src={User} alt="" className='user' />
        <h1 id="data">Username= {a.username}</h1>
        <h1 id="data">Email= {a.email}</h1>
        <h1 id="data">Password= {a.password}</h1>

        <a targe="_blank" rel="masih">
          <img className='picture' src={a.image} alt="profile" />
        </a>
        <hr/>
        <br/>
        <button onClick={() => {handleDelete(a.id)}}>Delete</button>
        <br />
        <button onClick={() => {xyz(a.id)}}>Update</button>
      </div>
      
      ))}
      
       </div>
  )
}

export default List;
