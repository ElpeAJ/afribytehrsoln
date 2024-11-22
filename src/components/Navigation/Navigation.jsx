// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import style from "./Navigation.module.css";
// import { navlinks } from '../navdetails';
// import { taskdetails } from "../taskinfo";
// import { fontawesomeicons } from '../navdetails';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { CButton, CModalBody, CModalTitle, CModalHeader, CModal, CModalFooter } from "@coreui/react";
// import '@coreui/coreui/dist/css/coreui.min.css'; // Import CoreUI CSS

// export default function Navigation() {
//   const [selectedLink, setSelectedLink] = useState(navlinks[0].page);
//   const [isEmployeeDropdownOpen, setIsEmployeeDropdownOpen] = useState(true);
//   // const [isInputVisible, setIsInputVisible] = useState(false);
//   const [visible, setVisible] = useState(false); // State for modal visibility

//   const handleLinkClick = (page) => {
//     setSelectedLink(page);
//   };

//   const handleEmployeeMenuHover = () => {
//     setIsEmployeeDropdownOpen(!isEmployeeDropdownOpen);
//   };

//   const handleInputChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const [searchTerm, setSearchTerm] = useState('');

//   // const handleButtonClick = () => {
//   //   setIsInputVisible(!isInputVisible);
//   // };

//   return (
//     <div className={style.links}>
//       {navlinks.map((navlink) => (
//         <div 
//           key={navlink.page} 
//           className={`${style.pair} ${selectedLink === navlink.page ? style.selectedLink : ""}`}
//           onClick={() => handleLinkClick(navlink.page)}
//         >
//           {navlink.icon && <i className={style.fontawesome}>{navlink.icon}</i>}
//           {navlink.page === "employees" ? (
//             <>
//               <Link
//                 to={`/${navlink.page}`}
//                 className={style.navLink}
//                 onMouseEnter={handleEmployeeMenuHover}
//                 onMouseLeave={handleEmployeeMenuHover}
//               >
//                 {navlink.page}
//               </Link>
//               {isEmployeeDropdownOpen && (
//                 <ul className={`${style.dropdownMenu} ${isEmployeeDropdownOpen ? "show" : ""}`}>
//                   {/* Dropdown options can be added here */}
//                 </ul>
//               )}
//             </>
//           ) : navlink.page === "search" ? (
//             // <Link to={`/${navlink.page}`} className={style.navLink} onClick={handleButtonClick}>
//             //   {navlink.page}
//             // </Link>
//             <CButton onClick={() => setVisible(!visible)}>{navlink.page}</CButton>
//           ) : navlink.page === "inbox" ? (
//             // <Link to={`/${navlink.page}`} className={style.navLink} onClick={handleButtonClick}>
//             //   {navlink.page}
//             // </Link>
//             // <div>{navlink.page}</div>
//             <CButton onClick={() => setVisible(!visible)}>{navlink.page}</CButton>
//           )
//           : (
//             <Link to={`/${navlink.page}`} className={style.navLink}>
//               {navlink.page}
//             </Link>
//           )}
//         </div>
//       ))}

//       {/* Add a button to trigger the modal */}
//       {/* <CButton color="primary" onClick={() => setVisible(!visible)}>INBOX</CButton> */}

//       {/* Modal Component for inbox */}
//       <CModal visible={visible} onClose={() => setVisible(false)}>
//         <CModalHeader onClose={() => setVisible(false)}>
//           <CModalTitle>Inbox <span>{fontawesomeicons.greaterthan.icon}</span></CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//         <div className={style.inbox}>
//             <select className={style.select}>
//                 <option value="option1">All Tasks</option>
//                 <option value="option2">First 5 Tasks</option>
//                 <option value="option3">First 10 Tasks</option>
//             </select>
//             {taskdetails.length > 0 ? (
//             <div className={style.gridbox}>
//                 {taskdetails.map((taskdetail) => (
//                 <div className={style.inboxitems}>
//                     <div><img src={taskdetail.profileImg} alt={taskdetail.username} /></div>
//                     <div className={style.infotext}>
//                         <p>{taskdetail.comment}</p>
//                         <p>{taskdetail.description}</p>
//                     </div>
//                     <div className={style.xmark}><FontAwesomeIcon icon={faXmark} /></div>
//                 </div>
//                 ))}
//             </div>
//             ) : (
//                 <p className={style.noTasks}>No tasks in your inbox yet.</p>
//             )}
//         </div>
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="secondary" onClick={() => setVisible(false)}>Close</CButton>
//           <CButton color="primary">Save changes</CButton>
//         </CModalFooter>
//       </CModal>
//       {/* Modal Component for Search*/}
//       <CModal visible={visible} onClose={() => setVisible(false)}>
//         <CModalHeader onClose={() => setVisible(false)}>
//           <CModalTitle>Inbox <span>{fontawesomeicons.greaterthan.icon}</span></CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//         <div className={style.inbox}>
//             <form>
//               <input
//                 className={style.type}
//                 type="text"
//                 name="search"
//                 id="search-input"
//                 // placeholder={navlinks[4].icon}
//                 placeholder={`Type 3 letters to start searching`}
//                 value={searchTerm}
//                 onChange={handleInputChange}
//               />
//               <div className={style.searchdiv}>
//                 <FontAwesomeIcon className={style.searchicon} icon={faSearch}/>
//                 <input className={style.sub} type="submit" value="Search"/>
//               </div>     
//             </form>
//             <div className={style.searchtext}>
//                 <h1>What are you searching for?</h1>
//                 <p>Try searching for features, people, roles, departments, email address, positions and much more!</p>
//             </div>
//             {/* <ul>
//               {filteredTasks.map((task) => (
//                 <li key={task.id}>
//                   {Render task details here }
//                 </li>
//               ))}
//             </ul> */}
//         </div>
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="secondary" onClick={() => setVisible(false)}>Close</CButton>
//           <CButton color="primary">Save changes</CButton>
//         </CModalFooter>
//       </CModal>
//     </div>
//   );
// }

import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import style from "./Navigation.module.css";
import { navlinks } from '../navdetails';
import { taskdetails } from "../taskinfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CButton, 
  CModalBody, CModalTitle, CModalHeader, 
  CModal, CModalFooter, CDropdown,
  //  CCollapse, CNav, CNavItem,CNavLink, 
  CDropdownItem, CDropdownMenu, CDropdownToggle} from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css'; // Import CoreUI CSS

export default function Navigation() {
  const [selectedLink, setSelectedLink] = useState(navlinks[0].page);
  // const [isEmployeeDropdownOpen, setIsEmployeeDropdownOpen] = useState(true);

  // Separate state for each modal visibility
  const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);
  const [isInboxModalVisible, setIsInboxModalVisible] = useState(false);
  // const [visible, setVisible] = useState(false); // State for modal visibility


  const handleLinkClick = (page) => {
    setSelectedLink(page);
  };

  // const handleEmployeeMenuHover = () => {
  //   setIsEmployeeDropdownOpen(!isEmployeeDropdownOpen);
  // };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const [searchTerm, setSearchTerm] = useState('');

  const EmployeeDropdown = () => {
    return (
      <div style={{position:"relative"}}>
      <CDropdown>
        <CDropdownToggle style={{ backgroundcolor: "rgb(216, 242, 250)", color: "black", border:"none", padding: 0}}>
          employees
        </CDropdownToggle>
        {ReactDOM.createPortal(
        <CDropdownMenu>
          {/* <CDropdownItem href="#">Employee List</CDropdownItem>
          <CDropdownItem href="#">Org Chart</CDropdownItem>
          <CDropdownItem href="#">Timeline View</CDropdownItem> */}
          <CDropdownItem className={style.dropdownitem}> <Link to="/employee-list">Employee List</Link> </CDropdownItem>
          <CDropdownItem className={style.dropdownitem}> <Link to="">Org Chart</Link> </CDropdownItem>
          <CDropdownItem className={style.dropdownitem}> <Link to="">Timeline View</Link> </CDropdownItem>
        </CDropdownMenu>,
          document.body
          )}
      </CDropdown>
      </div>
    );
  };

  return (
    <div className={style.links}>
      {navlinks.map((navlink) => (
        <div 
          key={navlink.page} 
          className={`${style.pair} ${selectedLink === navlink.page ? style.selectedLink : ""}`}
          onClick={() => handleLinkClick(navlink.page)}
        >
          {navlink.icon && <i className={style.fontawesome}>{navlink.icon}</i>}
          {navlink.page === "employees" ? (
            // <>
            //   <Link
            //     to={`/${navlink.page}`}
            //     className={style.navLink}
            //     onMouseEnter={handleEmployeeMenuHover}
            //     onMouseLeave={handleEmployeeMenuHover}
            //   >
            //     {navlink.page}
            //   </Link>
            //   {isEmployeeDropdownOpen && (
            //     <ul className={`${style.dropdownMenu} ${isEmployeeDropdownOpen ? "show" : ""}`}>
            //       <li>All Employees</li>
            //       <li>All Employees</li>
            //       <li>All Employees</li>
            //     </ul>
            //   )}
            // </>
            <EmployeeDropdown/>
          ) : navlink.page === "search" ? (
            <CButton onClick={() => setIsSearchModalVisible(true)} className={style.navLink}>{navlink.page}</CButton>
          ) : navlink.page === "inbox" ? (
            <CButton onClick={() => setIsInboxModalVisible(true)} className={style.navLink} >{navlink.page}</CButton>
          ) : (
            <Link to={`/${navlink.page}`} className={style.navLink}>
              {navlink.page}
            </Link>
          )}
        </div>
      ))}
      {/* Search Modal */}
      <CModal visible={isSearchModalVisible} onClose={() => setIsSearchModalVisible(false)}>
        <CModalHeader onClose={() => setIsSearchModalVisible(false)}>
          <CModalTitle>Search</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <div className={style.search}>
            <form>
              <input
                className={style.type}
                type="text"
                name="search"
                id="search-input"
                placeholder="Type 3 letters to start searching"
                value={searchTerm}
                onChange={handleInputChange}
              />
              <div className={style.searchdiv}>
                <FontAwesomeIcon className={style.searchicon} icon={faSearch}/>
                <input className={style.sub} type="submit" value="Search"/>
              </div>     
            </form>
            <div className={style.searchtext}>
              <h1>What are you searching for?</h1>
              <p>Try searching for features, people, roles, departments, email address, positions and much more!</p>
            </div>
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setIsSearchModalVisible(false)}>Close</CButton>
        </CModalFooter>
      </CModal>

      {/* Inbox Modal */}
      <CModal visible={isInboxModalVisible} onClose={() => setIsInboxModalVisible(false)}>
        <CModalHeader onClose={() => setIsInboxModalVisible(false)}>
          <CModalTitle>Inbox</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <div className={style.inbox}>
            <select className={style.select}>
              <option value="option1">All Tasks</option>
              <option value="option2">Reminders</option>
              <option value="option3">Absence</option>
              <option value="option4">Employee data</option>
            </select>
            {taskdetails.length > 0 ? (
              <div className={style.gridbox}>
                {taskdetails.map((taskdetail) => (
                  <div className={style.inboxitems} key={taskdetail.username}>
                    <div><img src={taskdetail.profileImg} alt={taskdetail.username} /></div>
                    <div className={style.infotext}>
                      <p>{taskdetail.comment}</p>
                      <p>{taskdetail.description}</p>
                    </div>
                    <div className={style.xmark}><FontAwesomeIcon icon={faXmark} /></div>
                  </div>
                ))}
              </div>
            ) : (
              <p className={style.noTasks}>No tasks in your inbox yet.</p>
            )}
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setIsInboxModalVisible(false)}>Close</CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
}

