import React from "react"
import { useSelector } from "react-redux"
import "../../../../CSS/LocateGame.css"
import Dates from "./Dates"


const Sidebar = ({isFullDatePicker, setIsFullDatePicker}) => {
    const sportPicked = useSelector(state=>state.sportPicked)

    if (isFullDatePicker) {
      console.log("isFullDatePicker is true")
      return (
        <div className='smallscreensidebar'>
          <div className="smallscreensidebardiv">
            <p>You are setting up a {sportPicked.toLowerCase()} activity</p>
            <p>Search a park or look for one near you on the map</p>
            <p>Pick a date to view or set up an activity</p>
            <Dates/>
            <i onClick={()=>{setIsFullDatePicker(false)}} className="fas fa-3x finishedbutton fa-check-circle"></i>
          </div>
        </div>
      )
    } else {
      return (
        <div className='mapsidebar'>
          <p>You are setting up a {sportPicked.toLowerCase()} activity</p>
          <p>Search a park or look for one near you on the map</p>
          <p>Pick a date to view or set up an activity</p>
          <Dates/>
        </div>
      )
    }
}


export default Sidebar