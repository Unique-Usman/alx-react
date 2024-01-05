import React from "react";
import "./Notifications.css"
import closeButtonImg from "./close-icon.jpg"
import {getLatestNotification} from "./utils"

const createNotification = () => {

  const handleClick = () => {
    console.log("Close button has been clicked")
  }
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button aria-label="Close">
        <img onClick={handleClick} src={closeButtonImg}></img>
      </button>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li 
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}/>
      </ul>
    </div>
  )
}

export default createNotification;
