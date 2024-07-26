import React from "react";
import { employeeprofiles } from "../employeeprofile";
import style from "./PayrollInformation.module.css";

// const publicprofilekeys = Object.keys(employeeprofiles.publicProfile);
const payrollinformationentries = Object.entries(employeeprofiles.payrollInformation);
function PayrollInformation() {
  return (
    <div>
      <div className={style.caption}>
        <h1>Payroll Information</h1>
        <p>You have edit rights</p>
      </div>
      <div>
        {payrollinformationentries.map((pie) => (
          <div className={style.objectentrydiv}>
            {pie.map((piei) => (
              <>
                <div>{piei}</div>
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PayrollInformation;
