import React, { useState } from 'react'

function Count() {
  const [count, setCount] = useState(0)

  const add=()=>{
    setCount(count+1)
  }
  
  const del=()=>{
    if(count>0){
    setCount(count-1)
    }
  }

  return (
    <>
    <div>
    <h3>Count : {count}</h3>
    <button onClick={add}>ADD COUNT</button><br /><br />
    <button onClick={del}>DELETE COUNT</button>
    </div>
    </>
  )
}

export default Count
