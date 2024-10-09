import React from "react";
import { recruitingdetails } from "../recruitinginfo";
import style from "./Recruiting.module.css";
import { fontawesomeicons } from "../navdetails";
// import Card from "../Card/Card";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Form } from "react-router-dom";

export default function Recruiting() {
  return (
    <div className={style.recruit}>
      <p className={style.recruittext}>
        <span className={style.iconOnHover}>{fontawesomeicons.briefcase.icon}</span>
        Recruiting <span>{fontawesomeicons.greaterthan.icon}</span>
      </p>
      {recruitingdetails.length === 1 ? (
        <h3 className={style.recruitno}>
          {recruitingdetails.length} Upcoming Interview
        </h3>
      ) : (
        <h3 className={style.recruitno}>
          {recruitingdetails.length} Upcoming Interviews
        </h3>
      )}

      {recruitingdetails.length > 0 ? (
        <div className={style.gridbox}>
          {recruitingdetails.map((recruitingdetail) => (
            <div className={style.recruitdetails}>
              {/* <div> */}
              <p>Recruitee: {recruitingdetail.recruiteename}</p>
              <p>Position: {recruitingdetail.position}</p>
              <p>Date: {recruitingdetail.interviewdate}</p>
              {/* </div> */}
              <div className={style.interviewer}>
                <p>Interviewer: {recruitingdetail.hiringManager.name}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={style.none}>
          <p className={style.icon}>{fontawesomeicons.upcoming.icon}</p>
          <p className={style.noInterviews}>No upcoming interviews.</p>
        </div>
      )}
    </div>
  );
}
