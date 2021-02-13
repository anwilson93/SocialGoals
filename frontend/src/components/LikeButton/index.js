import {createDiaryLike, createGoalLike} from '../../store/likes';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import CheckIfLikeDiaryEntry from '../CheckIfLike/CheckIfLikeDiaryEntry';
import CheckIfLikeGoal from '../CheckIfLike/CheckIfLikeGoal';

function LikeButton ({goalId, userId, diaryEntryId}) {

    let [likeDiary, setLikeDiary] = useState(false);
    let [likeGoal, setLikeGoal] = useState(false);

    const dispatch = useDispatch();

    const likeSomething = () => {
        if (diaryEntryId){
            setLikeDiary(true)
            return(dispatch(createDiaryLike({diaryEntryId, userId}),
             ))
        } else {
            setLikeGoal(true)
            return(dispatch(createGoalLike({userId, goalId})))
        }
    }
    if (likeDiary) {
        return (
        <CheckIfLikeDiaryEntry diaryEntryId={diaryEntryId} />
        )
    } else if (likeGoal) {
        return (
            <CheckIfLikeGoal goalId={goalId} />
        )
    }

    return (
        <>
        <button className='like-button' onClick={likeSomething}><i className="far fa-heart"/></button>
        </>
    )
}

export default LikeButton;