import { type } from '@testing-library/user-event/dist/type'
import React, { useReducer, useState } from 'react'

function Counter() {

function reducerfn(state,{type,payload=1}){


switch(type){
  case "inc" : return state+payload
  case "dic" : return state-payload
}


}


  // let [count,setcount]=useState(0)
let [count, dispatch]=useReducer(reducerfn,0)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch({type:"inc"})}>inc</button>
      <button onClick={()=>dispatch({type:"dic"})}>dic</button>

      <br />

      <button onClick={()=>dispatch({type:"inc",payload:50})}>inc 50 </button>
      <button onClick={()=>dispatch({type:"dic",payload:50})}>dic 50</button>

      <br />
       
      <button onClick={()=>dispatch({type:"inc",payload:120})}>inc 120 </button>
      <button onClick={()=>dispatch({type:"dic",payload:120})}>dic 120</button>

    </div>
  )
}

export default Counter