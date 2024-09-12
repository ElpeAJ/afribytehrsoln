import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Trial from "../components/Trial/Trial";
import style from "./InboxPage.module.css";
import { taskdetails } from "../components/taskinfo";
// import { fontawesomeicons} from "../components/navdetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


export default function InboxPage() {
  return (
    <div className={style.splitscreen}>
      <div>
      <Navigation />
      </div>
      <div className={style.main}>
        <Trial />
        <div className={style.maincontent}>
        <div className={style.inbox}>
            <p className={style.inboxtext}>Inbox</p>
            {/* <h3 className={style.taskno}>
            {taskdetails.length} {taskdetails.length === 1 ? "task": "tasks"}
            </h3> */}
            <select className={style.select}>
                <option value="option1">All Tasks</option>
                <option value="option2">First 5 Tasks</option>
                <option value="option3">First 10 Tasks</option>
            </select>
            {taskdetails.length > 0 ? (
            <div className={style.gridbox}>
                {taskdetails.map((taskdetail) => (
                <div className={style.inboxitems}>
                    <img src={taskdetail.profileImg} alt={taskdetail.username} />
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
        </div>
      </div>
    </div>
  );
}
