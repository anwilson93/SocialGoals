import SidePanel from '../SidePanel';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import { fetchAllMyDiaryEntries } from '../../store/diaries';
import MyDiaryEntryCard from './MyDiaryEntryCard';


function MyDiaryEntries () {

    const username = useSelector(state => state.session.user.username);
    const userId = useSelector(state => state.session.user.id);

    const dispatch = useDispatch();

    
    useEffect (() => {
        dispatch(fetchAllMyDiaryEntries(userId))
    }, [dispatch])

    const goals = useSelector(state => {
        return state.diaries.diaries
    });

    const getCompleted = () => {
        console.log('i')
        // return(dispatch(fetchAllMyCompletedGoals(userId)))   
    }

    const getAllGoals = () => {
        console.log('b')
        // return(dispatch(fetchAllMyGoals(userId)))
    }

    try {
    return (
        <>
            {username && <h2>Welcome to your profile page, {username}!</h2>}
            <div className='main-top'>
                <SidePanel />
                <div className='my-goals-container'>
                    <Link to='/diaries'><button className='goals-button' onClick={getAllGoals}>Diary Entries</button></Link>
                    <Link to={`/diaries/comments`}><button className='goals-button'  onClick={getCompleted}>Diary Comments</button></Link>

                    {goals && goals.map(goal => {
                        let goalId = goal.id
                        let diary = goal.DiaryEntries

                        return (
                            <>
                                <div>
                                    <div>
                                        {goal.name}
                                    </div>
                                    <div><MyDiaryEntryCard diary={diary}/></div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )} catch (e){
        return (
            <h4>Something went wrong. Try reloading the page</h4>
        )
    }
}

export default MyDiaryEntries;