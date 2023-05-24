
import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import List from './components/List';
import Signup from './components/Signup';
import Update from './components/Update';
import Search from './components/Search'
import SignIn from './components/Signin';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const [xyza, setXyza] = useState()
  const xyzb = (id) =>{
    setXyza(id)
  }
  return (

    <>
    <BrowserRouter>
    <Routes>
      <Route path='/list' element={<List xyzb={xyzb} />} />
      <Route path='signup' element={<Signup />} />
      <Route path='list/update' element={<Update xyza={xyza} List={<List xyzb={xyzb} />} />} />
      <Route path='search' element={<Search />} />
      <Route path='/' element={<SignIn />} />


      

    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;





{/* <div className="App">
      <Header />
      <hr/>
      <List />,
      <hr />
      <Signup />
      <hr />
      <Update />
      <Footer />
    </div> */}
