import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Trial from "../components/Trial/Trial";
import style from "./SettingsPage.module.css";
// import { taskdetails } from "../components/taskinfo";
// import { fontawesomeicons} from "../components/navdetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBuilding, faUsers, faCalendarAlt, faBriefcase, faHandshake, faArrowsSpin, faGrip, faDollar, faChartLine, faQuestion } from "@fortawesome/free-solid-svg-icons"; // Importing multiple icons

export const settingsdetails = [
    {
        Organisation: [ "Company", 
            "Legal entities (subcompanies)", 
            "Cost centers", 
            "Dashboard", 
            "Departments and Teams", 
            "Offices"]
    },
    {
        People: [ "Employee Information",
            "Employee Roles",
            "Documents"
        ]
    },
    {
        "Work Hours and Absences" : [ "Absence",
            "Attendance",
            "Absence Calendar",
            "Bank Holidays"
        ]
    },
    {
        Recruiting: [ "Recruiting"]
    },
    {
        Workflows: [ "Custom Workflows",
            "On-/Offboarding",
            "Approvals"
        ]
    },
    {
        Integrations : [ "API credentials",
            "Authentication",
            "Calendar integration"
        ]
    },
    {
        Payroll: [ "Salary & Payroll", 
            "Additional Compensation", 
            ]
    },
    {
        "Performance & Development": [ 
            "Performance & Development",
        ]
    },
    {
        Support : [ 
            "Subscription and Billing",
            "Support",
        ]
    },
]

export default function SettingsPage() {
  return (
    <div className={style.splitscreen}>
      <div>
      <Navigation />
      </div>
      <div className={style.main}>
        <Trial />
        <div className={style.maincontent}>
        <div className={style.settings}>
            <p className={style.settingstext}>Settings</p>
            <div className={style.mainDiv}>
            {settingsdetails.map((setting, index) => {
                const key = Object.keys(setting)[0]; // Get the key of each object
                const values = setting[key]; // Get the array values corresponding to the key

                // Choose an icon based on the key
                let icon;
                if (key === "Organisation") {
                  icon = faBuilding;
                } else if (key === "People") {
                  icon = faUsers;
                } else if (key === "Work Hours and Absences") {
                  icon = faCalendarAlt;
                } else if (key === "Recruiting") {
                  icon = faHandshake;
                } else if (key === "Workflows") {
                  icon = faArrowsSpin;
                } else if (key === "Integrations") {
                  icon = faGrip;
                } else if (key === "Work Hours and Absences") {
                  icon = faCalendarAlt;
                } else if (key === "Payroll") {
                    icon = faDollar;
                  } else if (key === "Performance & Development") {
                    icon = faChartLine;
                  } else if (key === "Support") {
                    icon = faQuestion;
                  }
                else {
                  icon = faBriefcase; // Default icon if needed
                }

                // return (
                //     <div key={index} className={style.eachDiv}>
                //         <h3><FontAwesomeIcon icon={icon} style={{ marginRight: "10px", backgroundColor: "rgb(228, 251, 255)"}} />{key}</h3> {/* Display the key (e.g., Organisation, People, etc.) */}
                //         <ul>
                //             {values.map((value, i) => (
                //                 <li key={i}>{value}</li>
                //             ))}
                //         </ul>
                //     </div>
                // );
                return (
                    <div key={index} className={style.eachDiv}>
                        <h3>
                            <span style={{ marginRight: "10px", padding: "10px", backgroundColor: "rgb(228, 251, 255)", borderRadius: "50%" }}>
                                <FontAwesomeIcon icon={icon} />
                            </span>
                            {key}
                        </h3>
                        <ul>
                            {values.map((value, i) => (
                                <li key={i}>{value}</li>
                            ))}
                        </ul>
                    </div>
                );
                
            })}
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}
