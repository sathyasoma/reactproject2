
import React from 'react'
import { useState } from 'react'


export const Third = () => {

    const [state,setState]=useState({
        id:1234,
        name:"divya",
        salary:67000,
        address:"knl",
        work:"bnglr"
    })

    const changeDetails=()=>{

        setState({
        id:4567,
        name:"sathya",
        salary:1000,
        address:"hyd",
        work:"coimbotore"
        })
    }
  return (
    <div>
    <h2>Employee Details : {state.id}, {state.name}, {state.salary} , {state.address} , {state.work}</h2>
    <button onClick={changeDetails}>Enter</button>
    </div>
  )
}
