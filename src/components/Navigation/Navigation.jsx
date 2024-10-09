import React from 'react'
import { Link } from "react-router-dom";
import style from "./Navigation.module.css";
import { navlinks } from '../navdetails';
import { useState } from "react";
// import { CButton, CModalBody, CModalTitle, CModalHeader, CModal, CModalFooter,CModalFooter } from "@coreui/react";

export default function Navigation() {
  // const [visible, setVisible] = useState(false);
  const [selectedLink, setSelectedLink] = useState(navlinks[0].page);
  const handleLinkClick = (page) => {
    setSelectedLink(page);
  };

  const [isEmployeeDropdownOpen, setIsEmployeeDropdownOpen] = useState(true);
  const handleEmployeeMenuHover = () => {
    setIsEmployeeDropdownOpen(!isEmployeeDropdownOpen);
  };

  const [isInputVisible, setIsInputVisible] = useState(false);
  const handleButtonClick = () => {
    setIsInputVisible(!isInputVisible);
  };

  return (
    <div className={style.links}>
      {navlinks.map((navlink) => (
        <div key={navlink.page} 
        // className={style.pair}
          className={`${style.pair} ${selectedLink === navlink.page ? style.selectedLink : ""}`}
          onClick={() => handleLinkClick(navlink.page)}>
          {navlink.icon && <i className={style.fontawesome}>{navlink.icon}</i>}
          {navlink.page === "employees" ? (
            <>
              <Link
                to={`/${navlink.page}`}
                className={style.navLink}
                // className={`${style.navLink} ${selectedLink === navlink.page ? style.selectedLink : ""}`}
                // onClick={() => handleLinkClick(navlink.page)}
                onMouseEnter={handleEmployeeMenuHover}
                onMouseLeave={handleEmployeeMenuHover}
              >
                {navlink.page}
              </Link>
              {isEmployeeDropdownOpen && (
                <ul className={`${style.dropdownMenu} ${isEmployeeDropdownOpen ? "show": ""}`}>
                  {/* Add your employee dropdown options here */}
                  {/* <li>
                    <Link to="/employees/list">Employee List</Link>
                  </li>
                  <li>
                    <Link to="/employees/chart">Org Chart</Link>
                  </li>
                  <li>
                    <Link to="/employees/timeline">Timeline View</Link>
                  </li> */}
                </ul>
              )}
            </>
          ) : (navlink.page === "search" ? (
            <Link
                to={`/${navlink.page}`}
                className={style.navLink}
                onClick={handleButtonClick}
              >
                {navlink.page}
              </Link>
  //           <>
  //   <CButton color="primary" onClick={() => setVisible(!visible)}>Search</CButton>
  //   <CModal
  //     scrollable
  //     visible={visible}
  //     onClose={() => setVisible(false)}
  //     aria-labelledby="ScrollingLongContentExampleLabel2"
  //   >
  //     <CModalHeader>
  //       <CModalTitle id="ScrollingLongContentExampleLabel2">Modal title</CModalTitle>
  //     </CModalHeader>
  //     <CModalBody>
  //       <p>
  //         Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
  //         in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
  //       </p>
  //       <p>
  //         Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
  //         vel augue laoreet rutrum faucibus dolor auctor.
  //       </p>
  //       <p>
  //         Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
  //         scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
  //         auctor fringilla.
  //       </p>
  //       <p>
  //         Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
  //         in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
  //       </p>
  //       <p>
  //         Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
  //         vel augue laoreet rutrum faucibus dolor auctor.
  //       </p>
  //       <p>
  //         Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
  //         scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
  //         auctor fringilla.
  //       </p>
  //       <p>
  //         Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
  //         in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
  //       </p>
  //       <p>
  //         Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
  //         vel augue laoreet rutrum faucibus dolor auctor.
  //       </p>
  //       <p>
  //         Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
  //         scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
  //         auctor fringilla.
  //       </p>
  //       <p>
  //         Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
  //         in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
  //       </p>
  //       <p>
  //         Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
  //         vel augue laoreet rutrum faucibus dolor auctor.
  //       </p>
  //       <p>
  //         Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
  //         scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
  //         auctor fringilla.
  //       </p>
  //       <p>
  //         Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
  //         in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
  //       </p>
  //       <p>
  //         Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
  //         vel augue laoreet rutrum faucibus dolor auctor.
  //       </p>
  //       <p>
  //         Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
  //         scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
  //         auctor fringilla.
  //       </p>
  //       <p>
  //         Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
  //         in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
  //       </p>
  //       <p>
  //         Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
  //         vel augue laoreet rutrum faucibus dolor auctor.
  //       </p>
  //       <p>
  //         Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
  //         scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
  //         auctor fringilla.
  //       </p>
  //     </CModalBody>
  //     <CModalFooter>
  //       <CButton color="secondary" onClick={() => setVisible(false)}>
  //         Close
  //       </CButton>
  //       <CButton color="primary">Save changes</CButton>
  //     </CModalFooter>
  //   </CModal>
  // </>
          ):( 
            // {/* Add check for icon existence */}
            <Link to={`/${navlink.page}`} className={style.navLink}>
              {navlink.page}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

// export default Navigation;

// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import style from "./Navigation.module.css";
// import { navlinks } from '../navdetails';
// import {
//   CDropdown,
//   CDropdownToggle,
//   CDropdownMenu,
//   CDropdownItem,
// } from '@coreui/react';
// import '@coreui/coreui/dist/css/coreui.min.css'; // Import CoreUI CSS

// export default function Navigation() {
//   const [selectedLink, setSelectedLink] = useState(navlinks[0].page);
//   const [isInputVisible, setIsInputVisible] = useState(false);

//   const handleLinkClick = (page) => {
//     setSelectedLink(page);
//   };

//   const handleButtonClick = () => {
//     setIsInputVisible(!isInputVisible);
//   };

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
//             <CDropdown variant="btn-group" direction="dropend">
//               <CDropdownToggle className={style.navLink}>
//                 {navlink.page}
//               </CDropdownToggle>
//               <CDropdownMenu className={style.dropdownMenu}>
//                 <CDropdownItem component={Link} to="/employees/list">
//                   Employee List
//                 </CDropdownItem>
//                 <CDropdownItem component={Link} to="/employees/chart">
//                   Org Chart
//                 </CDropdownItem>
//                 <CDropdownItem component={Link} to="/employees/timeline">
//                   Timeline View
//                 </CDropdownItem>
//               </CDropdownMenu>
//             </CDropdown>
//           ) : navlink.page === "search" ? (
//             <Link
//               to={`/${navlink.page}`}
//               className={style.navLink}
//               onClick={handleButtonClick}
//             >
//               {navlink.page}
//             </Link>
//           ) : (
//             <Link to={`/${navlink.page}`} className={style.navLink}>
//               {navlink.page}
//             </Link>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
