import React from 'react'
import { employeeprofiles } from '../employeeprofile';
import style from "./PublicProfile.module.css";

// const publicprofilekeys = Object.keys(employeeprofiles.publicProfile);
const publicprofileentries = Object.entries(employeeprofiles.publicProfile);
function PublicProfile() {
  return (
    <div>
      <div className={style.caption}>
        <h1>Public profile</h1>
        <p>You have edit rights</p>
      </div>
      {/* <div>
        {publicprofilekeys.map((ppk) =>
        (<div>{ppk}</div>))}
      </div> */}
      <div>
        {publicprofileentries.map((ppe) => (
          <div className={style.objectentrydiv}>
            {ppe.map((ppei) => (
              <>
                <div>{ppei}</div>
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PublicProfile;