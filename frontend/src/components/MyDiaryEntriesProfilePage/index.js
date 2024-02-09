import SidePanel from '../SidePanel';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchAllMyDiaryEntries } from '../../store/diaries';
import MyDiaryEntryCard from './MyDiaryEntryCard';
import CreateDiaryFormModal from '../CreateDiaryFormModal';
import './MyDiaryEntriesProfilePage.css';

function MyDiaryEntriesProfilePage() {

    const username = useSelector(state => state.session.user.username);
    const userId = useSelector(state => state.session.user.id);

    const dispatch = useDispatch();
    let history = useNavigate();


    useEffect(() => {
        dispatch(fetchAllMyDiaryEntries(userId));
    }, [dispatch]);

    let goals;
    const myGoals = useSelector(state => {
        return state.diaries;
    });

    if (myGoals) {
        goals = myGoals.diaries;
    }

    try {
        return (
            <>
                {username && <h2 className='add-margin'>Welcome to your profile page, {username}!</h2>}
                <div className='main-top'>
                    <SidePanel />
                    <div className='my-goals-container'>
                        <div className='goals-buttons-container'>
                            <Link to='/diaries'><button className='goals-button'>Diary Entries</button></Link>
                            {/* <Link to={`/diaries/comments`}><button className='goals-button'  onClick={getCompleted}>Diary Comments</button></Link> */}
                        </div>

                        {goals && goals.map(goal => {
                            let goalId = goal.id;
                            let diary = goal.DiaryEntries;

                            return (
                                <>
                                    <div className='goals-individual-container diary-individual-container'>
                                        <div className='goal-name' id='goal-name-in-diary-page'>
                                            Goal: {goal.name}
                                            <div id='add-diary-button'>
                                                <CreateDiaryFormModal goalId={goalId} userId={userId} />
                                            </div>
                                            <div className='space-diary'></div>
                                        </div>

                                        <div className='all-diary-entries'>
                                            <MyDiaryEntryCard diary={diary} userId={userId} />
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </>
        );
    } catch (e) {
        console.log(e);
        return (
            <h4>Something went wrong. Try reloading the page</h4>
        );
    }
}

export default MyDiaryEntriesProfilePage;