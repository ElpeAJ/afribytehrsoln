import React from 'react'
import Button from '../Button/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import style from "./Trial.module.css";

function Trial() {
  return (
    <div className={style.grid}>
      <div>
        <FontAwesomeIcon icon={faInfoCircle} className={style.info} />
      </div>
      <div className={style.continue}>
        <h4>Sign up for a plan to continue using Personio</h4>
        <p>
          You have {} days left in your 14-day free trial of Personio. Sign up
          for a plan now or reach out to our Sales team to continue using
          Personio.
        </p>
      </div>
      <div className={style.buttondiv}>
        <Button linksto="/" name="Contact Sales" color="white" />
        <Button linksto="/" name="Select plan" color="blue" />
      </div>
    </div>
  );
}

export default Trial;