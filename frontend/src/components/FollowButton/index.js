import {createGoalFollow, createUserFollow, fetchGoalFollows} from '../../store/follow';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import CheckIfFollowingGoal from '../CheckIfFollowing/CheckIfFollowingGoal';
import { fetchAllDiariessForGoalsAUserFollows } from '../../store/diaries';

function FollowButton ({goalId, userId, usernameToFollow, username}) {

    let [followingGoal, setFollowingGoal] = useState(false);

    const dispatch = useDispatch();

    const followSomething = () => {
        if (goalId){
            setFollowingGoal(true)
            return(dispatch(createGoalFollow({goalId, userId}), dispatch(fetchGoalFollows(userId)), dispatch(fetchAllDiariessForGoalsAUserFollows(userId)) ))
        } else {
            return(dispatch(createUserFollow({usernameToFollow, userId, username})))
        }
    }
    if (followingGoal) {
        return (
        <CheckIfFollowingGoal goalId={goalId} />
    )
        }
    // } else {
    //     return (
    //         // <CheckIfFollowingGoal goalId={goalId} />
    //         null
    //     )
    // }
    return (
        <>
        <button className='unfollow-follow-button' onClick={followSomething}>Follow</button>
        {/* <CheckIfFollowingGoal goalId={goalId} /> */}
        </>
    )
}

export default FollowButton;