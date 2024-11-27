import React, { useState } from 'react'

function Ques2() {
    const [name,setName]=useState('')
    const[colors,setColor]=useState("blue")
  return (
    <>
    <input type="text" placeholder='Enter name' onChange={(e)=>{setName(e.target.value)}} />
    <button onClick={()=>{setColor({colors:"blue"})}}>chang color</button>
    <div style={{color:colors}}>{name}</div>
    </>
  )
}

export default Ques2