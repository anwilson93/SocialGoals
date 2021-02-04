import './HomePage.css';
import {useEffect} from 'react';
import {fetchAllGoalsForPeopleAUserFollows} from '../../store/goals';
import {useDispatch, useSelector} from 'react-redux';
// import {Link} from 'react-router-dom';





function HomePage () {
    const username = useSelector(state => state.session.user.username);

    const dispatch = useDispatch()

    useEffect (() => {
        dispatch(fetchAllGoalsForPeopleAUserFollows(username))
    }, [dispatch])

    const goals = useSelector(state => {
        return state.goals.goals
    });


    return (
        <>
         {username && <h2>Welcome, {username}!</h2>}
            <h3>Social Feed:</h3>
            <div>
                {goals && goals.map(goal => {
                    let user = goal.User.username
                    let startDate = new Date(goal.startDate).toString().slice(0, 16);
                    return (
                        <>  
                            <div className='outer'>
                            <div className='largeContainer'>
                                <div className='individualContainer'>
                                    <div> {user} made a new goal: {goal.name}</div>
                                    <div className='space'></div>
                                    <div>Start date: {startDate}</div>
                                </div>
                            </div>
                            </div>
                        </>
                    )
            })}
            </div>
        </>
    )

}

export default HomePage;