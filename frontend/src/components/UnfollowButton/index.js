import {deleteGoalFollow, deleteUserFollow} from '../../store/follow';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import FollowButton from '../FollowButton';
import { fetchAllDiariessForGoalsAUserFollows } from '../../store/diaries';
import './UnfollowButton.css';



function UnfollowButton ({goalId, userId, username, follow, followingGoal}) {
    
    let [unfollowed, setUnfollowed] = useState(false);

    let usernameToUnfollow = follow;

    const dispatch = useDispatch();

    const unfollowSomething = () => {
        // if there's a goal id, then user is unfollowing a goal. Else user is unfollowing a user
        if (goalId){
            setUnfollowed(true)
            return(dispatch(deleteGoalFollow({goalId, userId}), 
            // dispatch(fetchAllDiariessForGoalsAUserFollows(userId))
            )).then(() => {
                return (dispatch(fetchAllDiariessForGoalsAUserFollows(userId)))
            })
        } else {
            return(dispatch(deleteUserFollow({userId, usernameToUnfollow, username})))
        }
    }

    if (unfollowed){
        return (
           <>
            < FollowButton username={username} userId={userId} goalId={goalId}/>
           </>
        )
    }
   

    if (followingGoal) {
        return (
            <button className='unfollow-follow-button' onClick={unfollowSomething}>Unfollow</button>
        )
    }

    return (
        <button className='unfollow-follow-button' onClick={unfollowSomething}>Unfollow</button>
    )
}

export default UnfollowButton;