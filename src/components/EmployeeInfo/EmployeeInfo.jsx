import React, {useState}from 'react';
import style from "./EmployeeInfo.module.css";
import {employeeprofiles} from "../employeeprofile"
import { employeeLinks, fontawesomeicons } from '../navdetails';
import { Link } from "react-router-dom";
import PublicProfile from '../PublicProfile/PublicProfile';
import HRInfo from '../HRInformation/HRInformation';
import BankDetails from '../BankDetails/BankDetails';
import PayrollInformation from '../PayrollInformation/PayrollInformation';
import PersonalData from '../PersonalData/PersonalData';
import EmergencyContact from '../EmergencyContact/EmergencyContact';
// import '@coreui/coreui/dist/css/coreui.min.css'
// import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem,} from '@coreui/react';

const sections = [
  { id: "pp", title: "Public profile" },
  { id: "hi", title: "HR information" },
  { id: "pd", title: "Personal data" },
  { id: "pi", title: "Payroll information" },
  { id: "bd", title: "Bank details" },
  { id: "ec", title: "Emergency contact" },
];


export default function EmployeeInfo() {
  const [selectedSection, setSelectedSection] = useState(sections[0].id);

  const handleSectionChange = (id) => {
    setSelectedSection(id);
  };
  return (
    <>
      <div className={style.profile}>
        <div className={style.profileimg}>
          <img
            src={employeeprofiles.publicProfile.img}
            alt={employeeprofiles.publicProfile.Name}
          />
          <div className={style.camera}>
            <i className={style.fontawesome}>{fontawesomeicons.camera.icon}</i>
          </div>
        </div>
        <div className={style.profileinfo}>
          <div className={style.name}>
            <h1>{employeeprofiles.publicProfile.Name}</h1>
            <div className={style.status}>
              <p>{employeeprofiles.HRInformation.Status}</p>
            </div>
          </div>
          <div className={style.work}>
            <div>
              <p>
                <i className={style.fontawesome}>
                  {fontawesomeicons.briefcase.icon}
                </i>
                {employeeprofiles.publicProfile.Position}
              </p>
            </div>
            <div>
              <p>
                <i className={style.fontawesome}>
                  {fontawesomeicons.people.icon}
                </i>
                {employeeprofiles.publicProfile.Team},{" "}
                {employeeprofiles.publicProfile.Department}
              </p>
            </div>
            <div>
              <p>
                <i className={style.fontawesome}>
                  {fontawesomeicons.location.icon}
                </i>
                {employeeprofiles.personalData.Street}
              </p>
            </div>
          </div>
          <div>
            <p>Since 15/06/2024 (joined less than a month ago). Reports to <span className={style.supervisorName}>{employeeprofiles.HRInformation.supervisorName}</span></p>
          </div>
        </div>
        <div className={style.other}>
          <div>
            <i className={style.fontawesome}>{fontawesomeicons.sitemap.icon}</i>
          </div>
          <div>
            <i className={style.fontawesome}>{fontawesomeicons.login.icon}</i>
          </div>
          {/* <div> */}
          {/* <CDropdown direction='down' className={style.dropdown}>
              <CDropdownToggle>
                <i className={style.fontawesome}>{fontawesomeicons.threedots.icon}</i>
                </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownItem href="#">Something else here</CDropdownItem>
              </CDropdownMenu>
          </CDropdown> */}
          {/* </div> */}
        </div>
      </div>
      
      <div className={style.employeelinks}>
        {employeeLinks.map((employeeLink) => (
          <div key={employeeLink.page}>
            <Link to={`/${employeeLink.page}`} className={style.employeelink}>{employeeLink.page}</Link>
          </div>
        ))}
      </div>
      <div className={style.employeeprofile}>
        <div className={style.employeeprofileleft}>
          {sections.map((section) => (
            <section
              key={section.id}
              className={
                selectedSection === section.id
                  ? style.normal + " " + style.selected
                  : style.normal
              }
            >
              <Link
                className={style.link}
                to={`#${section.id}`}
                onClick={() => handleSectionChange(section.id)}
              >
                {section.title}
              </Link>
            </section>
          ))}
        </div>
        {/* <div className={style.sections}>
          {sections.map((section) => (
            <section id={section.id}>
              <switch>
                <case value={section.id}>{section.title}</case>
              </switch>
            </section>
          ))}
        </div> */}
        <div className={style.sectionContent}>
          {(() => {
            switch (selectedSection) {
              case "pp":
                return (
                  <div className={style.sectionContentDiv} id="pp">
                    <PublicProfile />
                  </div>
                );
              case "hi":
                return (
                  <div className={style.sectionContentDiv} id="hi">
                    <HRInfo />
                  </div>
                );
              case "pd":
                return (
                  <div className={style.sectionContentDiv} id="pd">
                    <PersonalData/>
                  </div>
                );
              case "pi":
                return (
                  <div className={style.sectionContentDiv} id="pi">
                    <PayrollInformation />
                  </div>
                );
              case "bd":
                return (
                  <div className={style.sectionContentDiv} id="bd">
                    <BankDetails />
                  </div>
                );
              case "ec":
                return (
                  <div className={style.sectionContentDiv} id="ec">
                    <EmergencyContact/>
                  </div>
                );
              // ... add other cases
              default:
                return <div>Please select a section</div>;
            }
          })()}
          {/* <switch>
            <case value="pp">
             
              <div id="pp">
                <Link to={`#pp`}>Public Profile</Link>
                Public profile content - {employeeprofiles.publicProfile.name}
              </div>
            
              <break />
            </case>
            <case value="hi">
             
                <div id="hi">
                <Link to={`#hi`}>HR information</Link>
              </div>             

              <break />
            </case>
            <case value="pd">
              <div id="pd">
                <Link to={`#pd`}>Personal Data</Link>
              </div>

              <break />
            </case>

            <default>
              <div>Please select a section</div>
            </default>
          </switch> */}
        </div>
      </div>
    </>
  );
};
