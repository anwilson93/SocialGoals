import './HomePage.css';
import {useEffect} from 'react';
import {fetchAllGoalsForPeopleAUserFollows} from '../../store/goals';
import {useDispatch, useSelector} from 'react-redux';
import SidePanel from '../SidePanel';
import CommentBox from '../CommentBox';
import LikeAndFollowFormModal from '../LikeAndFollowFormModal';
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
            <div className='main-container'>
                <SidePanel />
                <div className='feed-container-outer'>
                {goals && goals.map(goal => {
                    let user = goal.User.username
                    let startDate = new Date(goal.startDate).toString().slice(0, 16);
                    let goalId = goal.id

                    return (
                        <>  
                            {/* <div className='feed-container'> */}
                            <div className='feed-container'>
                                <div className='individual-container'>
                                    <div> {user} made a new goal: {goal.name}</div>
                                    <div className='space'></div>
                                    <div>Start date: {startDate}</div>
                                    <LikeAndFollowFormModal />
                                    <CommentBox goalId={goalId}/>
                                </div>
                            </div>
                            {/* </div> */}
                        </>
                    )
            })}
            </div>
            </div>
        </>
    )

}

export default HomePage;