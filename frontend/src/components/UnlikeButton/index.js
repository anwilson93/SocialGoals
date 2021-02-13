import {deleteDiaryLike, deleteGoalLike} from '../../store/likes';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import LikeButton from '../LikeButton';



function UnlikeButton ({goalId, userId, diaryEntryId, likeDiary, likeGoal}) {
    
    let [unliked, setUnliked] = useState(false);

    const dispatch = useDispatch();

    const unlikeSomething = () => {
        
        if (diaryEntryId){
            setUnliked(true)
            return(dispatch(deleteDiaryLike({diaryEntryId, userId}), 
            ))}
        else {
            setUnliked(true)
            return(dispatch(deleteGoalLike({userId, goalId})))
        }
    }

    if (unliked){
        return (
           <>
            < LikeButton diaryEntryId={diaryEntryId} userId={userId} goalId={goalId}/>
           </>
        )
    }
   

    if (likeDiary) {
        return (
            <button className='like-button' onClick={unlikeSomething}><i className="fas fa-heart"/></button>
        )
    } else if (likeGoal) {
        return (
            <button className='like-button' onClick={unlikeSomething}><i className="fas fa-heart"/></button>
        )
    }

    return (
        <button className='like-button' onClick={unlikeSomething}><i className="fas fa-heart"/></button>
    )
}

export default UnlikeButton;