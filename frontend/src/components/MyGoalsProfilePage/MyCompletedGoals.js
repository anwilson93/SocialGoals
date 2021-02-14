import SidePanel from '../SidePanel';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchAllMyCompletedGoals} from '../../store/goals';
import {Link} from 'react-router-dom';



function MyCompletedGoals () {

    const username = useSelector(state => state.session.user.username);
    const userId = useSelector(state => state.session.user.id);

    const dispatch = useDispatch();
   
    
    useEffect (() => {
        dispatch(fetchAllMyCompletedGoals(userId))
    }, [dispatch])


    const completedGoals = useSelector(state => {
        return state.completed.completed
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
                    </div>

                    {completedGoals && completedGoals.map(goal => {
                        let goalId = goal.id

                        return (
                            <>
                                <div key={goalId}>
                                    <input type="checkbox" checked/>
                                    <label> {goal.name}</label>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default MyCompletedGoals;