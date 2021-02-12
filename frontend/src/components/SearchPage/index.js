import {useSelector} from 'react-redux';
import SearchedUserGoalModal from './SearchedUserGoalModal';
import SidePanel from "../SidePanel/index.js";
import CheckIfFollowing from '../MyFollowersProfilePage/CheckIfFollowing';

function SearchPage () {
 
    const search = useSelector(state => {
        return state.search.search
    });
    let searchedUsers;
 

    if (search){
        searchedUsers = search.users
        

        if (searchedUsers.length ===0){
            return (
                <>
                    <div className='main-container'>
                        <SidePanel />
                        <div className='results-container'>
                            <h1>No matching results</h1>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <div className='main-container'>
                    <SidePanel />
                    <div className='results-container'>
                    {searchedUsers.map(user => {
                        const userId = user.id
                        const username = user.username
                        return (
                            <>
                                <div key={user.id} className='individual-search-result'>
                                    <div className='inline-container'>
                                        <button className='login-form-buttons'>
                                            <SearchedUserGoalModal userId={userId} username={username}/>
                                            {user.username}
                                            <SearchedUserGoalModal userId={userId} username={username}/>
                                        </button>
                                        <div>
                                            <CheckIfFollowing follower={user}/>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div> 
                </div>
            )
        }
    } else {
        return (
            <>
                <div className='main-container'>
                    <SidePanel />
                    <div className='results-container'>
                        <h1>Please search for a user</h1>
                    </div>
                </div>
            </>
        )
    }
}

export default SearchPage;