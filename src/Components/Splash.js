import React from 'react'
import logo from '../img/logo.png'
function Splash() {
  return (
    <div>
      {/* <img src="logo.png" alt=""/> */}
      <div className='flex justify-center items-center pt-96 scale-50'>
    <img src={logo} alt="img-"/>
    </div>
      <div className='text-white flex justify-center items-center text-xl'>aaga</div>
      <div className='text-white flex justify-center items-center text-xl'>© CluelessCoders 2024</div>

      
    </div>
  )
}

export default Splash