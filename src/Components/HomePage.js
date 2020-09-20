import React, {useState} from "react"
import "../CSS/HomePage.css"
import PickSportPage from "./HomePageSub/PickSportPage"
import FriendsPage from "./HomePageSub/FriendsPage"
import {useSelector, useDispatch } from "react-redux"
import GamesScheduled from "./HomePageSub/GamesScheduled"
import Timeline from "./HomePageSub/Timeline"
import SearchFriendsPage from "./HomePageSub/SearchFriendsPage.js"
import UserPage from "./HomePageSub/UserPage"
import {Link, BrowserRouter as Router, Route, Switch} from "react-router-dom"

const HomePage = () => {
    const currentUser = useSelector(state=>state.currentUser)
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null)

    const isSelected = whichOption => whichOption === selectedOption ? true:false

    const renderMainContent = () => {
        if (isLoading) return <div className="homeloadingcontainer"><i className="loadingicon fas fa-circle-notch fa-4x"></i></div>
        else {
            return (
            <Switch>
                <Route path="/" exact component={PickSportPage}></Route>
                <Route path="/playTimee" exact component={PickSportPage}></Route>
                <Route path="/friends" component={FriendsPage}></Route>
                <Route path="/picksport" component={PickSportPage}></Route>
                <Route path="/gamesscheduled" component={GamesScheduled}></Route>
                <Route path="/searchfriends" component={SearchFriendsPage}></Route>
                <Route path="/timeline" component={Timeline}></Route>
                <Route path="/user/:id" component={UserPage}></Route>
            </Switch>
            )
        }
    }

    const letLoad = () => {
        setIsLoading(true)
        setTimeout(()=>{
            setIsLoading(false)
        }, 200)
      }

    const appLogout = () => {
        dispatch({type:"STARTLOADING"})
        setTimeout(()=>{
            dispatch({type: "STOPLOADING"})
            dispatch({type:"LOGOUT"})
        }, 250)
    }
    return (
        <Router>
            <div className="HomePage">
                <div className="navigationsidebar">
                    <Link onClick={()=>{dispatch({type: "CHANGE_USER", payload: currentUser})}} to={`/user/${currentUser.login.uuid}`}><img className="profileimage" alt="Profile headshot" src={currentUser.picture.large}></img></Link>
                    <Link onClick={()=>{letLoad(); setSelectedOption("search")}} to="/searchfriends" className={`linkbutton ${isSelected("search")?'selectedoption':null}`}><li><i className="fas fa-search"></i><span className="wordicon">Search</span></li></Link>
                    <Link onClick={()=>{letLoad(); setSelectedOption("timeline")}} to="/timeline" className={`linkbutton ${isSelected("timeline")?'selectedoption':null}`}><li><i className="fas fa-stream"></i><span className="wordicon">Timeline</span></li></Link>
                    <Link onClick={()=>{letLoad(); setSelectedOption("friends")}} to="/friends" className={`linkbutton ${isSelected("friends")?'selectedoption':null}`}><li><i className="fas fa-user-friends"></i><span className="wordicon">Friends</span></li></Link>
                    <Link onClick={()=>{letLoad(); setSelectedOption("picksport")}} to="/picksport" className={`linkbutton ${isSelected("picksport")?'selectedoption':null}`}><li><i className="fas fa-location-arrow"></i><span className="wordicon">Set Up</span></li></Link>
                    <Link onClick={()=>{letLoad(); setSelectedOption("gamesscheduled")}} to="gamesscheduled" className={`linkbutton ${isSelected("gamesscheduled")?'selectedoption':null}`}><li><i className="fas fa-calendar-alt"></i><span className="wordicon">Schedule</span></li></Link>
                    <Link onClick={()=>{appLogout()}} className="linkbutton"><li> <i className="fas fa-sign-out-alt" ></i><span className="wordicon">Logout</span></li></Link>
                </div>
                <div className="maincontent">
                    {renderMainContent()}
                </div>
            </div>
        </Router>
    )
}


export default HomePage