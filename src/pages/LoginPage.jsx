import React from "react";
import Form from "../components/Form/Form";
import style from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={style.flex}>
      <div className={style.loginimage}>
        <img src="/assets/images/womanInfrontOfComp.jpeg" alt="" />
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
}
