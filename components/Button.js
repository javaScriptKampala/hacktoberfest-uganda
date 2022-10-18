import React from 'react'

export default function Button(props) {
  return (
    <div>
     <button onClick={props.onclick} className={`primary-button  bg-${props.color} text-${props.tc} border-${props.bc} border text-md`} >
          {props.t}
        </button>
    </div>
  )
}
