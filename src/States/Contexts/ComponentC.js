import React from 'react'
import { UserContext } from '../../App';
import { useContext } from 'react';
 const ComponentC = () => {

    const user = useContext(UserContext)
  return (
    <div>    
   {user}

    </div>
  )
}

export default ComponentC;