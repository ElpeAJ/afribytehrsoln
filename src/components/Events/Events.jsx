import React from 'react'
import style from "./Events.module.css"
import { eventdetails } from '../eventinfo';
import { fontawesomeicons } from '../navdetails';
import { useNavigate} from 'react-router-dom';

function Events() {
  const navigate = useNavigate();
  function handleClick (){
    navigate.push("/employees");
    // <div className={style.dashboard}>
    //   <Link to="/employee">Dashboard</Link>
    // </div>
  };
  return (
    <div className={style.event}>
      <div className={style.eventtextdiv}>
        <div className={style.eventtext}>YourTeam </div>
        <div>{fontawesomeicons.filter.icon}</div>
      </div>
      <h3 className={style.eventheading}>Events</h3>
      {eventdetails.length > 0 ? (
        <div className={style.gridbox}>
          {eventdetails.map((eventdetail) => (
            <div className={style.eventitems} onClick={handleClick}>
              <div>
                <img src={eventdetail.profileImg} alt={eventdetail.username} />
              </div>
              <div className={style.infotext}>
                <p className={style.name}>{eventdetail.fullname}</p>
                <p>{eventdetail.status}</p>
              </div>
              <div className={style.time}>
                <p>{eventdetail.starttime}</p>
                <p>{eventdetail.endtime}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className={style.noTasks}>No Event yet.</p>
      )}
    </div>
  );
}

export default Events