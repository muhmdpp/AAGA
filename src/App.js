import React from 'react'
import Splash from './Components/Splash'
import './App.css'
import NavBar from './Components/NavBar'
import News from './Components/News'
import NewsInfo from './Components/NewsInfo'
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';

function App() {
  return (
    <>
    <div>
      
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