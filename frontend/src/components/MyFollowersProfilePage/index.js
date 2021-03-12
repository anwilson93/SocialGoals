import SidePanel from '../SidePanel';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchMyFollowers} from '../../store/follow';
import {Link} from 'react-router-dom';
import CheckIfFollowing from './CheckIfFollowing';


function MyFollowersProfilePage () {

    const username = useSelector(state => state.session.user.username);
    const userId = useSelector(state => state.session.user.id);

    const dispatch = useDispatch();

    
    useEffect (() => {
        dispatch(fetchMyFollowers(username))
    }, [dispatch])

    const myFollowers = useSelector(state => {
        return state.follows.myFollowers
    });

    let followers;

    if (myFollowers){
        followers = myFollowers.followers
    }

   

    

    return (
        <>
            {username && <h2 className='add-margin'>Welcome to your profile page, {username}!</h2>}
            <div className='main-top'>
                <SidePanel />
                <div className='my-goals-container'>
                    <div className='goals-buttons-container'>
                        <Link to='/followers'><button className='goals-button'>Followers</button></Link>
                        <Link to={`/following`}><button className='goals-button'>Following</button></Link>
                    </div>
                    {followers && followers.map(follower => {

                        return (
                            <>
                                <div key={follower} className='goals-individual-container'>
                                    <label className='goal-name'>{follower}</label> <CheckIfFollowing follower={follower} />
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default MyFollowersProfilePage;