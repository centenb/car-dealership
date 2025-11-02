import React from 'react'

export const Home = () => {
  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center relative">
        <img width="100%" height="100%" src="\jiyeonautohome.jpg" alt="jiyeonautohome" />
        <div className="absolute mt-0 ml-0 w-full h-[100px] bg-rgba(255,255,255,0.2) backdrop-blur-sm">
          <h1 className="flex justify-center items-center h-full text-6xl font-bold text-[#F7B360]">Welcome to Jiyeon Auto Inc.</h1>
        </div>
      </div>  
    </div>
  )
}
