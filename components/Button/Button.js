import React from 'react'

export default function Button(props) {
  return (
    <div>
     <button onClick={props.onclick} className={`primary-button  bg-${props.color} text-${props.textColor} border-${props.backgroundColor} border text-md`} >
          {props.text}
        </button>
    </div>
  )
}
