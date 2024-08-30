import React from "react";
import { employeeprofiles } from "../employeeprofile";
import style from "./PersonalData.module.css";

// const publicprofilekeys = Object.keys(employeeprofiles.publicProfile);
const personaldataentries = Object.entries(
  employeeprofiles.personalData
);
function PersonalData() {
  return (
    <div>
      <div className={style.caption}>
        <h1>Personal Data</h1>
        <p>You have edit rights</p>
      </div>
      <div>
        {personaldataentries.map((pde) => (
          <div className={style.objectentrydiv}>
            {pde.map((pdei) => (
              <>
                <div>{pdei}</div>
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonalData;
