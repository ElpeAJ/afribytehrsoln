import React, { useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import Trial from "../components/Trial/Trial";
import Button from "../components/Button/Button";
import { navlinks, subscriptionlinks } from "../components/navdetails";
import style from "./SubscriptionPage.module.css";
import { fontawesomeicons } from "../components/navdetails";
import { Link } from "react-router-dom";

export default function SubscriptionPage() {
  // State to control the number of visible rows
  const [visibleRows, setVisibleRows] = useState(3);

  // Data for the table rows (can be extended)
  const tableData = [
    { description: "Advanced digital employee file", core: "Advanced people list", corePro: "Document management" },
    { description: "Advanced people list", core: "Advanced people list", corePro: "Document management" },
    { description: "Document management", core: "5 MB per document", corePro: "Unlimited" },
    { description: "HR Information - Advanced digital employee file", core: fontawesomeicons.correct.icon, corePro: fontawesomeicons.correct.icon },
    { description: "Advanced people list", core: fontawesomeicons.correct.icon, corePro: fontawesomeicons.correct.icon },
    { description: "Document management", core: "5 MB per document", corePro: "Unlimited" }
  ];

  // Function to handle loading more rows
  const toggleRows = () => {
    if (visibleRows === tableData.length) {
      setVisibleRows(3); // Load less (reset to 3)
    } else {
      setVisibleRows(tableData.length); // Load all rows
    }
  };

  return (
    <div className={style.splitscreen}>
      <div>
        <Navigation />
      </div>
      <div className={style.main}>
        <Trial />
        <div className={style.maincontent}>
          <div>
            <Link to={`/${navlinks[9].page}`} className={style.back}>
              <span className={style.lessthan}>{fontawesomeicons.lessthan.icon}</span>Back to Setting
            </Link>
            <h1 className={style.heading}>Subscription and Billing</h1>
            <div className={style.subscriptionlinks}>
              {subscriptionlinks.map((subscriptionlink) => (
                <div key={subscriptionlink.page}>
                  <Link to={`/${subscriptionlink.page}`} className={style.subscriptionlink}>{subscriptionlink.page}</Link>
                </div>
              ))}
            </div>
          </div>
          <div className={style.splitscreen2}>
            {/* Details */}
            {/* <div className={style.details}>
              <h2>Subscription</h2>
              <p>All Plans are customisable with our suite of Apps.</p>
            </div> */}
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
               <div className={style.cart}>{fontawesomeicons.core.icon}</div>
               <h4>Core</h4>
               <p>Automate and simply. Empower your organisation to create efficiencies everywhere.</p>
               <ul>
                 <li>Centralise all people data and documents</li>
                 <li>Make data-driven decisions with easy-to-share reports</li>
                 <li>Keep your data secure with access controls and two-factor authentication</li>
               </ul>
               <div className={style.costrange}><p><b>From 8&euro; per person per month</b></p></div>
             </div>
             <div className={style.choiceplan}>
               <div className={style.cart}>{fontawesomeicons.corePro.icon}</div>
               <h4>Core Pro</h4>
               <p>Accelerate efficiencies. Access everything from <b>Core</b> with no limits.</p>
               <ul>
                 <li>Display multiple legal entities</li>
                 <li>Adapt Personio to your business needs with unlimited integrations, 
                   automations, and Public API to support your tool ecosystem
                 </li>
                 <li>Unlimited storage and custom reports</li>
               </ul>
               <div className={style.costrange}><p><b>From 11&#8364; per person per month</b></p></div>
             </div>
           </div>
            {/* Plan Summary */}
            <div className={style.table}>
              <h3>Plan Summary</h3>
              {/* Table */}
              <div className="whatisincluded">
                <table className={style.styledtable}>
                  <thead>
                    <tr>
                      <th>What's included?</th>
                      <th>Core</th>
                      <th>Core Pro</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.slice(0, visibleRows).map((row, index) => (
                      <tr key={index}>
                        <td>{row.description}</td>
                        <td>{row.core}</td>
                        <td>{row.corePro}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* Load More/Load Less button */}
                <div className={style.loadMore}>
                  <button onClick={toggleRows} className={style.loadMoreButton}>
                    {visibleRows === tableData.length ? "Load Less" : "Compare all features"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
}

