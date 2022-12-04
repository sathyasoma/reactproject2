import React from 'react'
import { useState } from 'react';


 const First = () => {

    const[count,setCount]=useState(0)

  return (
    <div>
     <h2>number of clicks: {count}</h2>
     <button onClick={()=>setCount(count+1)}>click</button>
    </div>
  )
}


export default First;