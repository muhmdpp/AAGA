import React from 'react'
import home from '../img/home.png'
import news from '../img/news.png'
import shop from '../img/shop.png'
import x from '../img/x.png'
import myplants from '../img/my-plants.png'
function NavBar() {
  return (
    <div className='flex justify-center overflow-hidden'>
         <div className="container flex bg-black p-2 w-full  mt-96 rounded-full justify-around items-center">
            {/* <div className=" main flex justify-between p-96 content-baseline items-center place-content-between h-10" > */}
            <div className='flex justify-around items-center'> 
                <div className="home p-4 "><img src={home} alt="img-"/></div>
                <div className="news p-4"><img src={news} alt="img-"/></div>

            </div>
                <div className="my-plants p-4 scale-150"><img src={myplants} alt="img-"/></div>
            <div className='flex justify-around items-center'>
                <div className="shop p-4"><img src={shop} alt="img-"/></div>
                <div className="funx p-4"><img src={x} alt="img-"/></div>

            </div>
            </div>

         {/* </div> */}
    </div>
  )
}

export default NavBar