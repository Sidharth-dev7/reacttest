import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0);
  return (
   <>
   <button onClick={()=>{setCount(count+1)}}>Inc</button>
   <button onClick={()=>{setCount(count-1)}}>Dec</button>
   <button onClick={()=>{setCount(count*0)}}>Reset</button>
   <div>{count}</div>
   </>
  )
}

export default Counter