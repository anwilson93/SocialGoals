import SidePanel from '../SidePanel';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchAllMyGoals, fetchAllMyCompletedGoals} from '../../store/goals';
import {Link} from 'react-router-dom';



function CompletedGoals () {

    const username = useSelector(state => state.session.user.username);
    const userId = useSelector(state => state.session.user.id);

    const dispatch = useDispatch();
   

    
    useEffect (() => {
        dispatch(fetchAllMyGoals(userId))
    }, [dispatch])


    const getCompleted = () => {
        return(dispatch(fetchAllMyCompletedGoals(userId)))
        
    }

    const getAllGoals = () => {
        return(dispatch(fetchAllMyGoals(userId)))
    }

    const completedGoals = useSelector(state => {
        console.log(state.completed.completed, 'yooo')
        return state.completed.completed
    });

    return (
        <>
            {username && <h2>Welcome to your profile page, {username}!</h2>}
            <div className='main-top'>
                <SidePanel />
                <div className='my-goals-container'>
                    <Link to='/goals'><button className='goals-button' onClick={getAllGoals}>Current Goals</button></Link>
                    <Link to={`/goals/completed`}><button className='goals-button'  onClick={getCompleted}>Completed Goals</button></Link>

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

export default CompletedGoals;