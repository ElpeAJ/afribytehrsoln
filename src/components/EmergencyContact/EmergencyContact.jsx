import React from "react";
import { employeeprofiles } from "../employeeprofile";
import style from "./EmergencyContact.module.css";

// const publicprofilekeys = Object.keys(employeeprofiles.publicProfile);
const emergencycontactentries = Object.entries(employeeprofiles.emergencyContact);
function EmergencyContact() {
  return (
    <div>
      <div className={style.caption}>
        <h1>Emergency Contact</h1>
        <p>You have edit rights</p>
      </div>
      <div>
        {emergencycontactentries.map((ece) => (
          <div className={style.objectentrydiv}>
            {ece.map((ecei) => (
              <>
                <div>{ecei}</div>
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmergencyContact;
