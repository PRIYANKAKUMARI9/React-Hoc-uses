import React from 'react'

function HocBlue(props) {
  return (
    <div>
      <div>
      <h2 style={{backgroundColor:'blue',width:200,margin:5,color:'white'}}><props.cmp/></h2>
    </div>
    </div>
  )
}

export default HocBlue
