import React, { useState } from 'react'

function Hoc() {
    const[count,setcount]=useState(0)
  return (
    <div>
      <h4>hoc take component and return new componenet</h4>
      <h1>{count}</h1>
      <button onClick={()=>setcount(count+1)}>Update</button>
    </div>
  )
}

export default Hoc
