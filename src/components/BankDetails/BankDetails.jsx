import React from "react";
import { employeeprofiles } from "../employeeprofile";
import style from "./BankDetails.module.css";

// const publicprofilekeys = Object.keys(employeeprofiles.publicProfile);
const bankdetailentries = Object.entries(employeeprofiles.bankDetails);
function BankDetails() {
  return (
    <div>
      <div className={style.caption}>
        <h1>Bank details</h1>
        <p>You have edit rights</p>
      </div>
      <div>
        {bankdetailentries.map((bde) => (
          <div className={style.objectentrydiv}>
            {bde.map((bdei) => (
              <>
                <div>{bdei}</div>
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BankDetails;
