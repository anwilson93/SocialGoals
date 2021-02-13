import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {fetchGoalFollows} from '../../store/follow';
import FollowButton from '../FollowButton';
import UnfollowButton from '../UnfollowButton'
import { fetchAllDiariessForGoalsAUserFollows } from '../../store/diaries';




function CheckIfFollowingGoal ({goalId}) {
    const username = useSelector(state => state.session.user.username);
    const userId = useSelector(state => state.session.user.id);

    let following;
    const dispatch = useDispatch();

    let [followingGoal, setFollowingGoal] = useState(false);
    
    useEffect (() => {
        return (dispatch(fetchGoalFollows(userId)), dispatch(fetchAllDiariessForGoalsAUserFollows(userId)))
    }, [dispatch, followingGoal, setFollowingGoal, following])

    const goalsIFollow = useSelector(state => {
        return state.follows
    });


    if (goalsIFollow){
        following = goalsIFollow.follows
    }
    
    useEffect (() => {
        if (following) {
            let i = 0
      
            while (i<following.length){
                
                if (goalId === following[i].goalId){
                    setFollowingGoal(true)
                    break;
                } else {
                    setFollowingGoal(false)
                }
                i++
            } 
        } else {
            setFollowingGoal(false)
        }
    }, [dispatch, followingGoal, setFollowingGoal, following, goalsIFollow])

   

    if (followingGoal) {
        return (
            <>
            <UnfollowButton userId={userId} username={username} goalId={goalId} followingGoal={followingGoal}/>
            </>
        )
    } else {
        return (
            < FollowButton username={username} userId={userId} goalId={goalId}/>
        )
    }
 
}
export default CheckIfFollowingGoal;