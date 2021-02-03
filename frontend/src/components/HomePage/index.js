// import './HomePage.css';
import {useEffect} from 'react';
import {fetchAllGoalsForPeopleAUserFollows, fetchUser} from '../../store/goals';
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
            <div className='product-listing'>
                {goals && goals.map(goal => {
                    let userId = goal.userId
                    useEffect (() => {
                        dispatch(fetchUser(userId))
                    }, [dispatch])

                    const user = useSelector(state => state.user.username);
                return (
                    <>
                        <div>{goal.name}</div>
                    </>
                )
            })}
            </div>
        </>
    )

}

export default HomePage;