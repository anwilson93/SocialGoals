// import './HomePage.css';
// import canvas from './z-s-pCFw8nlNS9c-unsplash.jpg';
// import painting from './steve-johnson-5MTf9XyVVgM-unsplash.jpg';
// import pottery from './oshin-khandelwal-EQpXnijYejQ-unsplash.jpg';
// import photography from './nathan-dumlao-p4TKmK4Egvg-unsplash.jpg';
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
        console.log(state.goals.User, 'yooooo')
        return state.goals.goals
    });

    return (
        <>
         {username && <h2>Welcome, {username}!</h2>}
            <h3>Social Feed:</h3>
            <div className='product-listing'>
                {goals && goals.map(goal => {
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