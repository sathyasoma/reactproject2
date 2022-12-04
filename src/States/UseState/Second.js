import React from "react";
import { useState } from "react";


const Second =()=>{

    const [name,setName] = useState("Soma")


    const changeName=()=>{   //by usingmethod we can change the value of the state

 setName("sathya prakash")
    }

    return(

    <>
      <h2>Hello welcome to {name}</h2>
      <button onClick={changeName}>submit</button>
    </>
    )
}
export default Second;