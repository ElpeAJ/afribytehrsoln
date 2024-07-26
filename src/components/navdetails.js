import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faInbox, faSearch, faPeopleGroup, faBoltLightning, faCalendar,
  faFile, faLifeRing, faGears, faCopy,faBarsStaggered, faArchive, faRightFromBracket, faChevronRight,
  faLocationDot, faSitemap, faBriefcase, faPeopleLine,faEllipsis,
  faCamera
} from "@fortawesome/free-solid-svg-icons";
// import { faBriefcase } from "@fortawesome/free-solid-svg-icons/faBriefcase";

export const navlinks = [
  {
    icon: "L",
    page: "Benfetti UG",
  },
  {
    icon: <FontAwesomeIcon icon={faHouse} />,
    page: "home",
  },
  {
    icon: <FontAwesomeIcon icon={faInbox} />,
    page: "inbox",
  },
  {
    icon: <FontAwesomeIcon icon={faSearch} />,
    page: "search",
  },
  {
    icon: <FontAwesomeIcon icon={faPeopleGroup} />,
    page: "employees",
  },
  {
    icon: <FontAwesomeIcon icon={faBoltLightning} />,
    page: "automations",
  },
  {
    icon: <FontAwesomeIcon icon={faCalendar} />,
    page: "calendars",
  },
  {
    icon: <FontAwesomeIcon icon={faFile} />,
    page: "reports",
  },
  {
    icon: <FontAwesomeIcon icon={faArchive} />,
    page: "subscription",
  },
  {
    icon: <FontAwesomeIcon icon={faGears} />,
    page: "settings",
  },
  {
    icon: <FontAwesomeIcon icon={faLifeRing} />,
    page: "help",
  },
  {
    icon: "N",
    page: "Name",
  },
];

export const fontawesomeicons = {
  greaterthan: {
    icon: <FontAwesomeIcon icon={faChevronRight} />,
  },
  upcoming: {
    icon: <FontAwesomeIcon icon={faCopy} />,
  },
  filter: {
    icon: <FontAwesomeIcon icon={faBarsStaggered} />,
  },
  login: {
    icon: <FontAwesomeIcon icon={faRightFromBracket} />,
  },
  location: {
    icon: <FontAwesomeIcon icon={faLocationDot} />,
  },
  sitemap: {
    icon: <FontAwesomeIcon icon={faSitemap} />,
  },
  briefcase: {
    icon: <FontAwesomeIcon icon={faBriefcase} />,
  },
  people: {
    icon: <FontAwesomeIcon icon={faPeopleLine} />,
  },
  threedots: {
    icon: <FontAwesomeIcon icon={faEllipsis} />,
  },
  camera: {
    icon: <FontAwesomeIcon icon={faCamera} />,
  },
};

