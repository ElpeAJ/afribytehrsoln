import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Trial from "../components/Trial/Trial";
import style from "./EmployeeListPage.module.css";
import Button from "../components/Button/Button";
import { allemployeesprofile } from "../components/employeeprofile";
// import EmployeeInfo from "../components/EmployeeInfo/EmployeeInfo";
import { fontawesomeicons} from "../components/navdetails";
// import { employeeprofiles } from "../components/employeeprofile";


export default function AddNewEmployeePage() {
  return (
    <div className={style.splitscreen}>
      <div>
        <Navigation />
      </div>
      <div className={style.main}>
        <Trial />
        <div className={style.maincontent}>
            <div>
                <h3 className={style.emptitle}>Add new employee</h3>
                <div>{fontawesomeicons.cross}</div>
            </div>
            <div className={style.searchnupdate}>
                <form action="">
                    <h6>Personal information</h6>
                    <hr />
                    <div>
                        <label for="firstname">First name <span className={style.asteriks}>*</span></label>
                        <input type="text" name="firstname" id=""/>
                    </div>
                    <div>
                        <label for="Surname">Surname <span className={style.asteriks}>*</span></label>
                        <input type="text" name="surname" id=""/>
                    </div>
                    <div>
                        <label for="Gender">Gender</label>
                        <input type="text" name="gender" id=""/>
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <input type="email" name="email" id=""/>
                    </div>
                    <h6>HR information</h6>
                    <hr />
                    <div>
                        <label for="employeetype">Employee type<span className={style.asteriks}>*</span></label>
                        <input type="text" name="employeetype" id="" placeholder="Select an option"/>
                    </div>
                    <div>
                        <label for="position">Position<span className={style.asteriks}>*</span></label>
                        <input type="text" name="surname" id=""/>
                    </div>
                    <div>
                        <label for="team">Team</label>
                        <input type="text" name="team" id="" placeholder="Select an option"/>
                    </div>
                    <div>
                        <label for="department">Department</label>
                        <input type="text" name="department" id="" placeholder="Select an option"/>
                    </div>
                    <div>
                        <label for="weeklyhours">Weekly hours</label>
                        <input type="number" name="department" id="" placeholder="/40"/>
                    </div>
              <input type="submit" value="🔎" />
            </form>
            <Button linksto="/" name="Add Employee" color="blue" />
          </div>
          <div>
            <table style={{ width: "100%", borderCollapse: "collapse" , overflowX:"scroll", fontSize:"0.85rem"}}>
              <thead>
                <tr style={{ backgroundColor: "#f2f2f2" }}>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name (Preferred)</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>Status</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>Employment Type</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>Email</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>Office</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Department
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>Team</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Position
                  </th>
                </tr>
              </thead>
              <tbody>
                {allemployeesprofile.map((employee, index) => (
                <tr key={index}>
                  <td style={{ border: "1px solid #ddd", padding: "8px", width:"15rem",display:"flex"}}>
                  <img className={style.profileimg} src={employee.publicProfile.img} alt="" />
                  <div className={style.verticalcenter}>{employee.publicProfile.Name}</div>
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" , color: "black" }}>
                  <span style={{backgroundColor:"rgb(188, 252, 188)", padding:"0.25rem", borderRadius:"9px"}}>{employee.HRInformation.Status}</span>
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px"}}>
                  {employee["HRInformation"]["Employment Type"]}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px", width:"15rem"}}>
                  {employee.publicProfile.Email}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {employee.publicProfile.Office}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {employee.publicProfile.Department}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {employee.publicProfile.Team}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {employee.publicProfile.Position}
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}