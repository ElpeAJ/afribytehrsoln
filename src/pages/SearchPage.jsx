import {useState, useEffect} from "react";
import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Trial from "../components/Trial/Trial";
import style from "./SearchPage.module.css";
import { taskdetails } from "../components/taskinfo";
// import { fontawesomeicons, navlinks} from "../components/navdetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";


export default function SearchPage() {
    const [searchTerm, setSearchTerm] = useState('');
  const [filteredTasks, setFilteredTasks] = useState(taskdetails);

  useEffect(() => {
    const filtered = taskdetails.filter((task) =>
      task.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTasks(filtered);
  }, [searchTerm, taskdetails]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className={style.splitscreen}>
      <div>
      <Navigation />
      </div>
      <div className={style.main}>
        <Trial />
        <div className={style.maincontent}>
        <div className={style.inbox}>
            <form>
              <input
                className={style.type}
                type="text"
                name="search"
                id="search-input"
                // placeholder={navlinks[4].icon}
                placeholder={`Type 3 letters to start searching`}
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
            <ul>
              {filteredTasks.map((task) => (
                <li key={task.id}>
                  {/* Render task details here */}
                </li>
              ))}
            </ul>
        </div>
        </div>
      </div>
    </div>
  );
}


// import React, { useContext } from 'react';
// import { SearchContext } from '../components/Context/SearchContext';

// function SearchPage() {
//   const { isSearchVisible, toggleSearchVisibility } = useContext(SearchContext);

//   return (
//     <div className={`search-box ${isSearchVisible ? 'active' : ''}`}>
//       {/* Your search input field and logic here */}
//       <input type="text" placeholder="Search..." className="search-input" style={{ display: isSearchVisible ? 'block' : 'none' }} />
//       <button onClick={toggleSearchVisibility} className="search-button">
//         {isSearchVisible ? 'Close Search' : 'Search'}
//       </button>
//     </div>
//   );
// }

// export default SearchPage;

// import React, { useState } from 'react';
// import Navigation from "../components/Navigation/Navigation";
// import Trial from "../components/Trial/Trial";
// import style from "./InboxPage.module.css";

// function SearchPage() {
//   const [isInputVisible, setIsInputVisible] = useState(false);

//   const handleButtonClick = () => {
//     setIsInputVisible(!isInputVisible);
//   };

//   return (
//     <div className={style.splitscreen}>
//       <div>
//       <Navigation />
//       </div>
//       <div className={style.main}>
//         <Trial />
//         <div className={style.maincontent}>
//     <div className="search-container">
//       <button onClick={handleButtonClick}>Search</button>
//       {isInputVisible && <input type="text" placeholder="Search..." />}
//     </div>
//     </div>
//       </div>
//     </div>
//   );
// }

// export default SearchPage;