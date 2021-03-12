import './HomePage.css';
import {useEffect} from 'react';
import {fetchAllGoalsForPeopleAUserFollows} from '../../store/goals';
import {fetchAllDiariessForGoalsAUserFollows} from '../../store/diaries';
import {fetchLikes} from '../../store/likes';
import {useDispatch, useSelector} from 'react-redux';
import SidePanel from '../SidePanel';
import CommentBox from '../CommentBox';
import { fetchGoalsIFollow } from '../../store/follow';
import DiaryEntriesCard from '../DiaryEntriesCard';
import CheckIfFollowingGoal from '../CheckIfFollowing/CheckIfFollowingGoal';
import CheckIfLikeGoal from '../CheckIfLike/CheckIfLikeGoal';
// import {Link} from 'react-router-dom';





function HomePage () {
    const username = useSelector(state => state.session.user.username);
    const userId = useSelector(state => state.session.user.id);

    const dispatch = useDispatch()

    useEffect (() => {
        dispatch(fetchAllGoalsForPeopleAUserFollows(username))
    }, [dispatch])

    useEffect (() => {
        dispatch(fetchAllDiariessForGoalsAUserFollows(userId))
    })

    useEffect (() => {
        dispatch(fetchLikes(userId))
    }, [dispatch])

    useEffect (() => {
        dispatch(fetchGoalsIFollow(userId))
    }, [dispatch])


    const goals = useSelector(state => {
        return state.goals.goals
    });

    
    try {

    
    return (
        <>
         {username && <h2 className='add-margin'>Welcome, {username}!</h2>}
            <div className='main-container'>
                <SidePanel />
                <div className='feed-container-outer'>
                {goals && goals.map(goal => {
                    let user = goal.User.username
                    let startDate = new Date(goal.startDate).toString().slice(0, 16);
                    let goalId = goal.id
                    let comments = goal.Comments


                    return (
                        <>  
                            {/* <div className='feed-container'> */}
                            <div className='feed-container' key={goal.id}>
                                <div className='individual-container' key={goal.id}>
                                    <div> <p className='username'> {user} </p> made a new goal: {goal.name}</div>
                                    <div className='space'></div>
                                    <div>Start date: {startDate}</div>
                                    {/* <LikeAndFollowFormModal goalId={goalId} userId={userId}/> */}
                                    <CommentBox goalId={goalId} userId={userId} comments={comments}/>
                                    {/* <CheckLikeOrUnlike goalId={goalId}/> */}
                                    <CheckIfFollowingGoal goalId={goalId} />
                                    <CheckIfLikeGoal goalId={goalId} /> 
                                </div>
                            </div>
                            {/* </div> */}
                        </>
                    )
            })}
            <DiaryEntriesCard userId={userId} />
            </div>
            </div>
        </>
    )} catch (e){
        return (
            <h4 className='add-margin'>Something went wrong. Try reloading the page</h4>
        )
    }

}

export default HomePage;