import React from 'react'
import img from '../img/img.png'
import news_thumb from '../img/img-news.png'
function News() {
  return (
    <>
        <div className="flex-col items-start main-container ml-52 mt-10">
           <div className="title text-7xl" style={{color:"#d9dca7"}}>NewsLetter</div>
           <div className="container-box w-9/12 h-52 bg-black pr-5 mt-4 opacity-35 rounded-3xl">
                <div className="text-area"></div>
                <div className="img-area">
                    <img src={news_thumb} alt="" />
                </div>
           </div>
        </div>
    </>
  )
}

export default News