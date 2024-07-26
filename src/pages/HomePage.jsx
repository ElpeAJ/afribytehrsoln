import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Trial from "../components/Trial/Trial";
import CurrentDate from "../components/Date/Date";
import Greeting from "../components/Greeting/Greeting";
import Inbox from "../components/Inbox/Inbox";
import style from "./HomePage.module.css";
import Recruiting from "../components/Recruiting/Recruiting";
import Events from "../components/Events/Events";
import TimeOff from "../components/TimeOff/TimeOff";
// import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className={style.splitscreen}>
      <div>
      <Navigation />
      </div>
      <div className={style.main}>
        <Trial />
        <div className={style.maincontent}>
          <div className={style.date}>
            <CurrentDate />
          </div>
          <Greeting name="Adwoa" />
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
