import {useSelector} from 'react-redux';
import SearchedUserGoalModal from './SearchedUserGoalModal';
import SidePanel from "../SidePanel/index.js";
import CheckIfFollowing from '../MyFollowersProfilePage/CheckIfFollowing';

function SearchPage () {
 
    const search = useSelector(state => {
        return state.search.search
    });

    const sessionUser = useSelector(state => {
        return state.session.user
    });

    let searchedUsers;
 

    if (search && sessionUser){
        searchedUsers = search.users
        

        if (searchedUsers.length ===0){
            return (
                <>
                    <h2>Search</h2>
                    <div className='main-container'>
                        <SidePanel />
                        <div className='results-container'>
                            <h3>No matching results</h3>
                        </div>
                        
                    </div>
                </>
            )
        } else {
            return (
                <>
                <h2>Search</h2>
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
                                            <CheckIfFollowing follower={username}/>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div> 
                </div>
                </>
            )
        }
    } else if (!sessionUser && search) {
        return (
            <>
                <h2>Search</h2>
                <div className='main-container'>
                    <SidePanel />
                    <div className='results-container'>
                        <h3>Please log in or sign up to search</h3>
                    </div>
                </div>
            </>
        )   

    } else {
        return (
            <>
                <h2>Search</h2>
                <div className='main-container'>
                    <SidePanel />
                    <div className='results-container'>
                        <h3>Please search for a user</h3>
                    </div>
                </div>
            </>
        )
    }
}

export default SearchPage;