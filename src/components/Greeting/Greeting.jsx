import React from 'react';
import style from './Greeting.module.css'

function Greeting(props) {
  return (
    <div>
      <h1 className={style.h1}>Good evening, {props.name}</h1>
    </div>
  )
}

export default Greeting;