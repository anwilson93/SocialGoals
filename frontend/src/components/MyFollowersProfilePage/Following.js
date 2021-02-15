import SidePanel from '../SidePanel';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchUsersIFollow} from '../../store/follow';
import {Link} from 'react-router-dom';
import UnfollowButton from '../UnfollowButton';


function Following () {

    const username = useSelector(state => state.session.user.username);
    const userId = useSelector(state => state.session.user.id);

    const dispatch = useDispatch();

    
    useEffect (() => {
        dispatch(fetchUsersIFollow(username))
    }, [dispatch])

    const usersIFollow = useSelector(state => {
        return state.follows.following
    });

    let following;

    if (usersIFollow){
        following = usersIFollow.following
    }

    

    return (
        <>
            {username && <h2>Welcome to your profile page, {username}!</h2>}
            <div className='main-top'>
                <SidePanel />
                <div className='my-goals-container'>
                    <div className='goals-buttons-container'>
                        <Link to='/followers'><button className='goals-button'>Followers</button></Link>
                        <Link to={`/following`}><button className='goals-button'>Following</button></Link>
                    </div>

                    {following && following.map(follow => {
                        return (
                            <>
                                <div key={follow} className='goals-individual-container' id='following'>
                                    <label className='goal-name'>{follow}</label> 
                                    <div className='unfollow-button-following-page'>
                                        <UnfollowButton userId={userId} username={username} follow={follow}/>
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

export default Following;