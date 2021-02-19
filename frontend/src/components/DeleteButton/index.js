import './DeleteButton.css';
import {deleteGoal} from '../../store/goals';
import {deleteDiaryEntry} from '../../store/diaries';
import {deleteGoalComment} from '../../store/comments';
import {useDispatch, useSelector} from 'react-redux';

function DeleteButton ({goalId, userId, diaryEntryId, comment}) {

    const username = useSelector(state => state.session.user.username);

    const dispatch = useDispatch();

    const deleteSomething = () => {
        //delete diary entry
        if (diaryEntryId){
            return(dispatch(deleteDiaryEntry(diaryEntryId, userId)))
        //delete comment for a goal
        } else if (comment) {
            return(dispatch(deleteGoalComment({goalId, userId, comment, username})))
        //delete a goal
        } else {
            return(dispatch(deleteGoal(goalId, userId)))
        }
    }
    return (
        <button className='delete-button' onClick={deleteSomething}>Delete</button>
    )
}

export default DeleteButton;