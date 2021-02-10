import {createGoalFollow, deleteUserFollow} from '../../store/follow';
import {useDispatch} from 'react-redux';

function UnollowButton ({goalId, userId, username, follow}) {

    let usernameToUnfollow = follow;
    const dispatch = useDispatch();

    const unfollowSomething = () => {
        if (goalId){
            return(dispatch(createGoalFollow(goalId, userId)))
        } else {
            return(dispatch(deleteUserFollow({userId, usernameToUnfollow, username})))
        }
    }
    return (
        <button className='delete-button' onClick={unfollowSomething}>Unfollow</button>
    )
}

export default UnollowButton;