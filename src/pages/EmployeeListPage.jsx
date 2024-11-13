import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Trial from "../components/Trial/Trial";
import style from "./EmployeeListPage.module.css";
import Button from "../components/Button/Button";
import { allemployeesprofile } from "../components/employeeprofile";
import { CDropdown, CDropdownItem, CButton, CDropdownToggle, CDropdownMenu, CDropdownDivider } from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css'; // Import CoreUI CSS
// import EmployeeInfo from "../components/EmployeeInfo/EmployeeInfo";
// import { fontawesomeicons} from "../components/navdetails";
// import { employeeprofiles } from "../components/employeeprofile";


export default function EmployeeListPage() {
  return (
    <div className={style.splitscreen}>
      <div>
        <Navigation />
      </div>
      <div className={style.main}>
        <Trial />
        <div className={style.maincontent}>
          <h3 className={style.emptitle}>Employees</h3>
          <div className={style.searchnupdate}>
            <form action="">
              <input type="text" name="" id="" placeholder="name, email, ID" />
              <input type="submit" value="🔎" />
            </form>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div>
            <Button linksto="/" name="Add Employee" color="blue" />
            </div>
          </div>
          <div>
            {['status', 'Employement Type', 'Office', 'Department', 'Team', 'Position'].map((color, index) => (
              <CDropdown variant="btn-group" key={index}>
                <CButton color={color}>{color}</CButton>
                <CDropdownToggle color={color} split />
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Separated link</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            ))}
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