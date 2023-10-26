import React, { useState } from 'react'

function BackGround() {

    const[color,setColor]=useState("white")
    const[name,setname]=useState("1")
    document.body.style.backgroundColor=color
    const changeColor=(e)=>{
      setColor(e.target.value)
    }
  
   const changeColorByButton=(data,data2)=>{
       setColor(data)
       setname(data2)
       document.getElementById("rijo").value=""

   }
    return (
    <div>
      <div className="relative flex flex-col justify-center h-screen items-center">
        

        <h1 className='text-slate-200 text-4xl font-extrabold'>BACKGROUND COLOR CHANGER</h1>
        
        
        <input  placeholder='Enter your color' id='rijo'  className='bg-slate-200 h-14 w-80 mt-10 text-center text-xl'  type="text"   onChange={(e)=>changeColor(e)} ></input>
     
        {name==="1"&&<button className='bg-slate-300 absolute right-80 rounded-full h-40 w-40 animate-bounce'  onClick={()=>changeColorByButton("black","2")}>click to black</button>}
        {name==="2"&&<button className='bg-slate-300 absolute top-16 rounded-full h-40 w-40 animate-bounce' onClick={()=>changeColorByButton("yellow","3")}>click to yellow</button>}
        {name==="3"&&<button className='bg-slate-300 absolute left-80 rounded-full h-40 w-40 animate-bounce' onClick={()=>changeColorByButton("red","4")}>click to red</button>}
        {name==="4"&&<button className='bg-slate-300 absolute bottom-16 rounded-full h-40 w-40 animate-bounce' onClick={()=>changeColorByButton("green","1")}>click to green</button>}
        

      </div>
    </div>
  )
}

export default BackGround
