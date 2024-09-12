import React from "react";
import { taskdetails } from "../taskinfo";
import style from "./Inbox.module.css";
// import Card from "../Card/Card";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Form } from "react-router-dom";

import { fontawesomeicons} from "../navdetails";

export default function Inbox(){
  return (
    <div className={style.inbox}>
      <p className={style.inboxtext}>
        Inbox <span>{fontawesomeicons.greaterthan.icon}</span>
      </p>
      <h3 className={style.taskno}>
        {taskdetails.length} {taskdetails.length === 1 ? "task": "tasks"}
      </h3>
      {taskdetails.length > 0 ? (
        <div className={style.gridbox}>
          {taskdetails.map((taskdetail) => (
            <div className={style.inboxitems}>
              <img src={taskdetail.profileImg} alt={taskdetail.username} />
              <div className={style.infotext}>
                <p>{taskdetail.comment}</p>
                <p>{taskdetail.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className={style.noTasks}>No tasks in your inbox yet.</p>
      )}
    </div>
  );
}

// import React, { useState } from 'react';

// function Inbox() {
//   const [isInboxOpen, setIsInboxOpen] = useState(false);

//   const handleInboxClick = () => {
//     setIsInboxOpen(!isInboxOpen);
//   };

//   return (
//     <div className="container">
//       <nav className="navigation">
//         <ul>
//           <li>Home</li>
//           <li>Profile</li>
//           <li onClick={handleInboxClick}>Inbox</li>
//           {/* Add more navigation links here */}
//         </ul>
//       </nav>
//       <div className="content">
//         {isInboxOpen && <div className="inbox">Inbox content here</div>}
//       </div>
//     </div>
//   );
// }

// export default NavigationAndInbox;