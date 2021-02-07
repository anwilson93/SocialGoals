import SidePanel from '../SidePanel';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchAllMyGoals} from '../../store/goals';
import {Link} from 'react-router-dom';
import './ProfilePage.css';
import CreateGoalFormModal from '../CreateGoalFormModal';
import DeleteButton from '../DeleteButton';


function ProfilePage () {

    const username = useSelector(state => state.session.user.username);
    const userId = useSelector(state => state.session.user.id);

    const dispatch = useDispatch();

    
    useEffect (() => {
        dispatch(fetchAllMyGoals(userId))
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
                    <Link to='/goals'><button className='goals-button'>Current Goals</button></Link>
                    <Link to={`/goals/completed`}><button className='goals-button'>Completed Goals</button></Link>

                    {goals && goals.map(goal => {
                        let goalId = goal.id
                        const completeGoal = () => {
                            console.log('complete', goalId)
                        }

                        return (
                            <>
                                <div key={goalId} className='goals-individual-container'>
                                    <input type="checkbox" onClick={completeGoal}/>
                                    <label>{goal.name}</label> < DeleteButton goalId={goalId} userId={userId}/>
                                </div>
                            </>
                        )
                    })}
                </div>
                <CreateGoalFormModal userId={userId}/>
            </div>
        </>
    )
}

export default ProfilePage;