import React from 'react'
import style from "./TimeOff.module.css"
import { fontawesomeicons } from '../navdetails';


function TimeOff() {
  return (
    <div className={style.timeOff}>
      <p className={style.timeOfftext}>
        Time Off <span>{fontawesomeicons.greaterthan.icon}</span>
      </p>
      <div className={style.tag}>
        <p>3 Oct</p>
        <div></div>
        <p>Tag der Deutschen Einheit</p>
      </div>
      <div className={style.request}>
        <button>Request time off</button>
      </div>
    </div>
  );
}

export default TimeOff