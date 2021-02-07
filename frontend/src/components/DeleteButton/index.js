import './DeleteButton.css';
import {deleteGoal} from '../../store/goals';
function DeleteButton ({goalId}) {

    const deleteSomething = () => {
        return dispatchEvent(deleteGoal(goalId))
    }
    return (
        <button className='delete-button' onClick={deleteSomething}>Delete</button>
    )
}

export default DeleteButton;