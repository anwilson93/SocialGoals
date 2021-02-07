import './DeleteButton.css';
import {deleteGoal} from '../../store/goals';
import {deleteDiaryEntry} from '../../store/diaries';
import {useDispatch} from 'react-redux';

function DeleteButton ({goalId, userId, diaryEntryId}) {

    const dispatch = useDispatch();

    const deleteSomething = () => {
        if (diaryEntryId){
            return(dispatch(deleteDiaryEntry(diaryEntryId, userId)))
        } else {
            return(dispatch(deleteGoal(goalId, userId)))
        }
    }
    return (
        <button className='delete-button' onClick={deleteSomething}>Delete</button>
    )
}

export default DeleteButton;