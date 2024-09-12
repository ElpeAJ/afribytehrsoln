import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Trial from "../components/Trial/Trial";
import Button from "../components/Button/Button";
import { navlinks, subscriptionlinks } from "../components/navdetails";
// import Inbox from "../components/Inbox/Inbox";
import style from "./SubscriptionPage.module.css";
import { fontawesomeicons } from "../components/navdetails";
// import Recruiting from "../components/Recruiting/Recruiting";
// import Events from "../components/Events/Events";
// import TimeOff from "../components/TimeOff/TimeOff";
import { Link } from "react-router-dom";

export default function SubscriptionPage() {
  return (
    <div className={style.splitscreen}>
      <div>
      <Navigation />
      </div>
      <div className={style.main}>
        <Trial />
        <div className={style.maincontent}>
          <div>
            <Link to={`/${navlinks[9].page}`} className={style.back}><span className={style.lessthan}>{fontawesomeicons.lessthan.icon}</span>Back to Setting</Link>
            <h1 className={style.heading}>Subscription and Billing</h1>
            <div className={style.subscriptionlinks}>
              {subscriptionlinks.map((subscriptionlink) =>(
                <div key={subscriptionlink.page}>
                  <Link to={`/${subscriptionlink.page}`} className={style.subscriptionlink}>{subscriptionlink.page}</Link>
                </div>
                ))}
            </div>
          </div>
          <div className={style.splitscreen2}>
            <div className={style.details}>
              <div>
                <h2>Subscription</h2>
                <p>All Plans are customisable with our suite of Apps.</p>
              </div>
              <div>
                <h3>Your people</h3>
                <p>Select the number of people working in your organisation befor picking a Plan.</p>
                <select name="" id="">
                  <option value="">Select number of people</option>
                  <option value="">0 - 10 employees</option>
                  <option value="">11 - 30 employees</option>
                  <option value="">31 - 50 employees</option>
                  <option value="">51 - 100 employees</option>
                  <option value="">Over 100 employees</option>
                </select>
              </div>
              <div>
                <h3>Our Plans</h3>
                <p>All the features needed to power your people operations. Choose your Plan to fit your organisation.</p>
              </div>
              
            </div>
            <div className={style.plansummary}>
              <h3>Plan Summary</h3>
              <div className={style.plan}>
                <div className={style.summary}>
                  <p>You're subscribed to Personio Trial</p>
                  <p>Access to all our features until <b>28 Jun 2024</b></p>
                  <p>Discover what's included</p>
                </div>
                <div className={style.cartdiv}>
                    <div className={style.cart}>{fontawesomeicons.cart.icon}</div>
                    <p className={style.pick}>Pick your subscription</p>
                    <p className={style.choose}>Choose the Plan and Apps that fit your needs. 
                      We'll summarize the ... Choose the Plan and Apps that fit your needs. 
                      We'll summarize the ...</p>
                </div>
              </div>
              <div className={style.agreement}>
                <p>I accept the general terms and conditions of Personi SE & Co. KG</p>
                <p>Note: You must accept the terms and conditions to continue</p>
                <div className={style.cont}>
                  <Button linksto="/" name="Continue to checkout" color="blue" className={style.button}/>
                </div>
              </div>
            </div>
          </div>
          <div className={style.choiceplansdiv}>
            <div className={style.choiceplan}>
              <div className={style.cart}>{fontawesomeicons.cart.icon}</div>
              <p>Core</p>
              <p>Automate and simply. Empower your organisation to create efficiencies everywhere.</p>
              <ul>
                <li>Centralise all people data and documents</li>
                <li>Make data-driven decisions with easy-to-share reports</li>
                <li>Keep your data secure with access controls and two-factor authentication</li>
              </ul>
            </div>
            <div className={style.choiceplan}>
              <div className={style.cart}>{fontawesomeicons.cart.icon}</div>
              <p>Core</p>
              <p>Automate and simply. Empower your organisation to create efficiencies everywhere.</p>
              <ul>
                <li>Centralise all people data and documents</li>
                <li>Make data-driven decisions with easy-to-share reports</li>
                <li>Keep your data secure with access controls and two-factor authentication</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
