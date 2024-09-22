import React from "react"
import { ChangingText } from "./ChangingText"
export const MainSection = () => {
  
  return (
  <div className="flex flex-col bg-gradient-to-r from-gray-600 to-gray-800 backdrop-blur-md w-full rounded-xl shadow-md h-[500px] justify-center text-white">
    <div
      className="flex flex-col text-center p-4 justify-center"
    >
      <h1 className="font-bold underline my-5">
        <ChangingText />
      </h1>
      <h1 className="font-light text-xl my-1">
      </h1>
      <h1 className="font-bold text-5xl my-2 ">
      My name is
      Muhammad Danish Asim,
      </h1>
      <h1 className="font-bold text-4xl my-5">
      A Pakistan <span>&#x1F1F5;&#x1F1F0;</span> Based Developer
      </h1>
      <h1 className="font-light text-xl bg-bl my-5 rounded-lg before:bg-white/10 border-white/20">
        Currently in US <span>&#x1F1FA;&#x1F1F8;</span>, Doing Masters in Software Engineering from University of Michigan, Dearborn 
      </h1>
      

    </div>
    {/* <div
      className="w-1/2"
    >
      <img src={MyImg} alt="" />
    </div> */}
  </div>)
}