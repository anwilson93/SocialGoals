import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {fetchGoalFollows} from '../../store/follow';
import FollowButton from '../FollowButton';
import UnfollowButton from '../UnfollowButton'




function CheckIfFollowingGoal ({goalId}) {
    console.log(goalId, 'goalidddd')
    const username = useSelector(state => state.session.user.username);
    const userId = useSelector(state => state.session.user.id);

    let following;
    const dispatch = useDispatch();

    let [followingGoal, setFollowingGoal] = useState(false);
    
    useEffect (() => {
        dispatch(fetchGoalFollows(userId))
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
        
        }
    }, [dispatch, followingGoal, setFollowingGoal, following])

   

    if (followingGoal) {
        return (
            <>
            <div className='following-checkmark'>following <i className="fas fa-check"></i></div>
            <UnfollowButton userId={userId} username={username} goalId={goalId}/>
            </>
        )
    } else {
        return (
            < FollowButton username={username} userId={userId} goalId={goalId}/>
        )
    }
 
}
export default CheckIfFollowingGoal;