import React from 'react'
import Splash from './Components/Splash'
import './App.css'
import NavBar from './Components/NavBar'
import News from './Components/News'
import NewsInfo from './Components/NewsInfo'
import {BrowserRouter as Router,Routes,Route,Navigate, Link} from 'react-router-dom';

function App() {
  return (
    <>
    <h1 className='text-white text-center mt-32 font-bold'>Table of Contents</h1>
    <div className='flex flex-col justify-center items-center text-white'>
      

      <Link to='/splash'>Splash</Link>
      <Link to='/navbar'>NavBar</Link>
      <Link to='/news-page'>News </Link>
      <Link to='news-info'>News Info</Link>
    </div>
    <Routes Routes>
      <Route path='/splash' element={<Splash/>} />
      <Route path='/navbar' element={<NavBar/>} />
      <Route path='/news-page' element={<News/>} />
      <Route path='/news-info' element={<NewsInfo/>} />
      
    </Routes>
     

     
     </>
    
    
  )
}

export default App