import React, { useState } from 'react'

function Ques2() {
  //   const [name,setName]=useState('')
  //   const[colors,setColor]=useState("blue")
  // return (
  //   <>
  //   <input type="text" placeholder='Enter name' onChange={(e)=>{setName(e.target.value)}} />
  //   <button onClick={()=>{setColor({colors:"blue"})}}>chang color</button>
  //   <div style={{color:colors}}>{name}</div>
  //   </>
  // )
  const [text, setText] = useState('')
    const [button, setButton] = useState(false)
  return (
    <>
        <div>Input</div>
        <input type="text" placeholder='Enter any text' onChange={(e) => setText(e.target.value)}/>
        <div style={{color: button? 'red':'black'}}>{text}</div>
        <button onClick={() => {setButton(!button)}}>Change Color</button>
    </>
  );
}

export default Ques2