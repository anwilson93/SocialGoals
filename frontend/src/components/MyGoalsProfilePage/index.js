import SidePanel from '../SidePanel';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchAllMyUncompletedGoals} from '../../store/goals';
import {Link} from 'react-router-dom';
import './MyGoalsProfilePage.css';
import CreateGoalFormModal from '../CreateGoalFormModal';
import DeleteButton from '../DeleteButton';
import {completeGoal} from '../../store/goals';


function MyGoalsProfilePage () {

    const username = useSelector(state => state.session.user.username);
    const userId = useSelector(state => state.session.user.id);

    const dispatch = useDispatch();

    
    useEffect (() => {
        dispatch(fetchAllMyUncompletedGoals(userId))
    }, [dispatch])

    const goals = useSelector(state => {
        return state.goals.goals
    });


    return (
        <>
            {username && <h2>Welcome to your profile page, {username}!</h2>}
            <div className='main-top'>
                <SidePanel />
                <div className='my-goals-container'>
                    <div className='goals-buttons-container'>
                        <Link to='/goals'><button className='goals-button'>Current Goals</button></Link>
                        <Link to={`/goals/completed`}><button className='goals-button'>Completed Goals</button></Link>
                        <div className='create-goal-button-container'>
                            <CreateGoalFormModal userId={userId}/> 
                        </div>
                    </div>

                    {goals && goals.map(goal => {
                        let goalId = goal.id
                        const complete = () => {
                            return(dispatch(completeGoal({goalId, userId}))) 
                        }

                        return (
                            <>
                                <div key={goalId} className='goals-individual-container'>
                                    <input type="checkbox" onClick={complete}/>
                                    <label className='goal-name'>{goal.name}</label> < DeleteButton goalId={goalId} userId={userId}/>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default MyGoalsProfilePage;