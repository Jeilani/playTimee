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
import Loading from "./Loading"

const HomePage = () => {
    const userHeadshot = useSelector(state=>state.currentUser.picture.large)
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)

    const renderMainContent = () => {
        if (isLoading) return <Loading/>
        else {
            return (
            <Switch>
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
                    <img className="profileimage" alt="Profile headshot" src={userHeadshot}></img>
                    <Link onClick={()=>{letLoad()}} to="/searchfriends" className="linkbutton"><li><i className="fas fa-search"></i><span className="wordicon">Search</span></li></Link>
                    <Link onClick={()=>{letLoad()}} to="/timeline" className="linkbutton"><li><i className="fas fa-stream"></i><span className="wordicon">Timeline</span></li></Link>
                    <Link onClick={()=>{letLoad()}} to="/friends" className="linkbutton"><li><i className="fas fa-user-friends"></i><span className="wordicon">Friends</span></li></Link>
                    <Link onClick={()=>{letLoad()}} to="/picksport" className="linkbutton"><li><i className="fas fa-location-arrow"></i><span className="wordicon">Set Up</span></li></Link>
                    <Link onClick={()=>{letLoad()}} to="gamesscheduled" className="linkbutton"><li><i className="fas fa-calendar-alt"></i><span className="wordicon">Schedule</span></li></Link>
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