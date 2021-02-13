import SidePanel from '../SidePanel';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchUsersIFollow} from '../../store/follow';
import {Link} from 'react-router-dom';
import CreateGoalFormModal from '../CreateGoalFormModal';
import DeleteButton from '../DeleteButton';
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
                    <Link to='/followers'><button className='goals-button'>Followers</button></Link>
                    <Link to={`/following`}><button className='goals-button'>Following</button></Link>

                    {following && following.map(follow => {
                        return (
                            <>
                                <div key={follow} className='goals-individual-container'>
                                    {/* <input type="checkbox" onClick={completeGoal}/> */}
                                    <label>{follow}</label> <UnfollowButton userId={userId} username={username} follow={follow}/>
                                </div>
                            </>
                        )
                    })}
                </div>
                {/* <CreateGoalFormModal userId={userId}/> */}
            </div>
        </>
    )
}

export default Following;