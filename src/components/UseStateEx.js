import React from 'react'

import { useState } from 'react'

 const UseStateEx = () => {

    const [state,setState] = useState({

        id:1234,
        name:"skct",
        address:"arivoli",
        salary:6700

    })
    const handler = ()=>{
        setState({

            id:4567,
        name:"HELLO",
        address:"HYD",
        salary:2000

        })
    }
  return (
    <div>
    <h2>Employee details : {state.id}, {state.name}, {state.address}, {state.salary}</h2>
    <button onClick={handler}>click</button>
    
    </div>
  )
}

export default UseStateEx;