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
            <div className='like-button-container'>
                 <button className='like-button' onClick={unlikeSomething}><i className="fas fa-heart"/></button>
            </div>
           
        )
    } else if (likeGoal) {
        return (
            <div className='like-button-container'>
                 <button className='like-button' onClick={unlikeSomething}><i className="fas fa-heart"/></button>
            </div>
        )
    }

    return (
        <div className='like-button-container'>
            <button className='like-button' onClick={unlikeSomething}><i className="fas fa-heart"/></button>
        </div>
    )
}

export default UnlikeButton;