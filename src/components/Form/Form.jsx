import React from "react";
import style from "./Form.module.css";
import { Link } from "react-router-dom";

export default function Form() {
  return (
    <div className={style.formdiv}>
      <h2 className={style.logoitalized}>
        <u>Personio</u>
      </h2>
      <h4>Log in to Benfetti UG</h4>
      <p className={style.benfetti}>benfetti-ug.personio.de</p>
      <p className={style.enter}>Enter your email and password.</p>
      <form className={style.form}>
        <label htmlFor="email">Email</label>
        <input type="email" name="" id="" placeholder="Email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="" id="" />
        <input type="submit" value="Log in" className={style.submit} />
      </form>
      <div className={style.split}>
        <div>
          <button>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Forgot your password?
            </a>
          </button>
        </div>
        <div>
          <button>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Problems loggin in?
            </a>
          </button>
        </div>
      </div>
      <div className={style.dashboard}>
        <Link to="/home">Dashboard</Link>
      </div>
    </div>
  );
}
