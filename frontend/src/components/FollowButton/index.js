import {createGoalFollow, createUserFollow} from '../../store/follow';
import {useDispatch} from 'react-redux';

function FollowButton ({goalId, userId, usernameToFollow, username}) {

    const dispatch = useDispatch();

    const followSomething = () => {
        if (goalId){
            return(dispatch(createGoalFollow(goalId, userId)))
        } else {
            return(dispatch(createUserFollow({usernameToFollow, userId, username})))
        }
    }
    return (
        <button className='delete-button' onClick={followSomething}>Follow</button>
    )
}

export default FollowButton;