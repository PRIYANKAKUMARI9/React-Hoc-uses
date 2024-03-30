import React from 'react'

function Hoc2(props) {// this is red component
  return (
    <div>
      <h2 style={{backgroundColor:'red',width:200,margin:5,color:'white'}}><props.cmp/></h2>
    </div>
  )
}

export default Hoc2
