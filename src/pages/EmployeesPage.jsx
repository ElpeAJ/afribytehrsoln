import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Trial from "../components/Trial/Trial";
import style from "./EmployeePage.module.css";
import EmployeeInfo from "../components/EmployeeInfo/EmployeeInfo";
// import { fontawesomeicons} from "../components/navdetails";
// import { employeeprofiles } from "../components/employeeprofile";


export default function EmployeePage() {
  return (
    <div className={style.splitscreen}>
      <div>
        <Navigation />
      </div>
      <div className={style.main}>
        <Trial />
        <div className={style.maincontent}>
          <EmployeeInfo/>
        </div>
      </div>
    </div>
  );
}