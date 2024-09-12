import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Trial from "../components/Trial/Trial";
import Button from "../components/Button/Button";
import Inbox from "../components/Inbox/Inbox";
import style from "./AutomationsPage.module.css";
import Recruiting from "../components/Recruiting/Recruiting";
import Events from "../components/Events/Events";
import TimeOff from "../components/TimeOff/TimeOff";
// import { Link } from "react-router-dom";

export default function AutomationPage() {
  return (
    <div className={style.splitscreen}>
      <div>
      <Navigation />
      </div>
      <div className={style.main}>
        <Trial />
        <div className={style.maincontent}>
          {/* <div className={style.date}>
            <CurrentDate />
          </div> */}
          {/* <Greeting name="Adwoa" /> */}
          <div className={style.workflowheader}>
            <div >Custom Workflows</div>
            <div>
                <Button linksto="/" name="Share Feedback" color="white" />
                <Button linksto="/" name="Create workflow" color="blue" />
            </div>
          </div>
          <div className={style.positionboxes}>
            <div>
              <Inbox />
              <TimeOff />
            </div>
            <div>
              <Recruiting />
              <Events />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
