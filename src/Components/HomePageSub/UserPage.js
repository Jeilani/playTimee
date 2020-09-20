import React from "react"
import {useSelector} from "react-redux"
import "../../CSS/UserPage.css"
import { useHistory } from "react-router-dom"

const UserPage = ({match}) => {
    const userProfile = useSelector(state=>state.selectedUserProfile)
    const history = useHistory()
    const {picture, name, login} = userProfile

    return (
        <div className="userpagecontainer">
            <div className="userpagesidebar">
                <i className="fas fa-comment-alt"></i>
                <i className="fas fa-plus"></i>
            </div>
            <div className="userpagemaincontent">
                <div className="scorecontainer"><span className="playtimescore">{Math.floor(Math.random() * 500) }</span></div>
                <div className="userinformation">
                    <img alt="user profile" src={picture.large}></img>
                    <p>@{login.username}</p>
                    <h2>{name.first} {name.last}</h2>
                </div>
                <div className="scorecontainer"><span className="gamessetupscore">{Math.floor(Math.random() * 5) }</span></div>
            </div>
            <i onClick={()=>{history.push("/searchfriends")}} className="userpagebackarrow fas fa-x fa-arrow-left"></i>
        </div>
    )
}

export default UserPage