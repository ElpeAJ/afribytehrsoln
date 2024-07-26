import React from "react";
import { employeeprofiles } from "../employeeprofile";
import style from "./HRInformation.module.css";

// const publicprofilekeys = Object.keys(employeeprofiles.publicProfile);
const hrinfoentries = Object.entries(employeeprofiles.HRInformation);
function HRInfo() {
  return (
    <div>
      <div className={style.caption}>
        <h1>HR information</h1>
        <p>You have edit rights</p>
      </div>
      <div>
        {hrinfoentries.map((hie) => (
          <div className={style.objectentrydiv}>
            {hie.map((hiei) => (
              <>
                <div>{hiei}</div>
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HRInfo;
