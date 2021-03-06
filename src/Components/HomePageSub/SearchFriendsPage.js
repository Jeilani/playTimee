import React, {useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import "../../CSS/SearchFriendsPage.css"
import {useHistory} from "react-router-dom"

const SearchFriendPage = () => {
    const [searchValue, setSearchValue] = useState("")
    const friendsList = useSelector(state=>state.friendsList)
    const dispatch = useDispatch()
    const history = useHistory()
    const onSearchChange = event => {
        setSearchValue(event.target.value)
    }
    const isSearchValueEmpty = () => {
        return searchValue === ""
    }

    const searchResults = friendsList.filter(friend=>(friend.name.first.indexOf(searchValue.toLowerCase()) !== -1) || (friend.name.last.indexOf(searchValue) !== -1)).map(friend=>{
        return (
        <div onClick={()=>{dispatch({type: "CHANGE_USER", payload:friend}); history.push('/user/' + friend.login.uuid)}} className="individualresults"><img alt="friend" src={friend.picture.large}></img><span>{friend.name.first} {friend.name.last}</span></div>
            )
    })

    return (
        <div className="searchfriendpage">
            <div className={`searchbox ${isSearchValueEmpty()? 'notclickedsearchbox': 'clickedsearchbox'}`}>
                <form onSubmit={(e)=>{e.preventDefault()}}>
                <i className="fas fa-search" type="submit"></i>
                    <input
                        value={searchValue}
                        onChange={onSearchChange}>
                    </input>
                </form>
            </div>
            <div className={`${isSearchValueEmpty()? 'notclickedresults': 'results'}`}>
                {!isSearchValueEmpty()?searchResults:null}
            </div>
        </div>
    )
}
export default SearchFriendPage