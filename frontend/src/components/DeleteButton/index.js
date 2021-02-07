import './DeleteButton.css';
import {deleteGoal} from '../../store/goals';
import {useDispatch} from 'react-redux';

function DeleteButton ({goalId, userId}) {

    const dispatch = useDispatch();

    const deleteSomething = () => {
        return(dispatch(deleteGoal(goalId, userId)))
    }
    return (
        <button className='delete-button' onClick={deleteSomething}>Delete</button>
    )
}

export default DeleteButton;