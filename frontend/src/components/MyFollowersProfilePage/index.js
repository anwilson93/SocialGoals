import SidePanel from '../SidePanel';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchMyFollowers} from '../../store/follow';
import {Link} from 'react-router-dom';
import CreateGoalFormModal from '../CreateGoalFormModal';
import DeleteButton from '../DeleteButton';


function MyFollowersProfilePage () {

    const username = useSelector(state => state.session.user.username);
    const userId = useSelector(state => state.session.user.id);

    const dispatch = useDispatch();

    
    useEffect (() => {
        dispatch(fetchMyFollowers(username))
    }, [dispatch])

    const myFollowers = useSelector(state => {
        return state.follows.myFollowers
    });

    let followers;

    if (myFollowers){
        followers = myFollowers.followers
    }

    

    return (
        <>
            {username && <h2>Welcome to your profile page, {username}!</h2>}
            <div className='main-top'>
                <SidePanel />
                <div className='my-goals-container'>
                    <Link to='/followers'><button className='goals-button'>Followers</button></Link>
                    <Link to={`/following`}><button className='goals-button'>Following</button></Link>

                    {followers && followers.map(follower => {
                        // let goalId = goal.id
                        // const completeGoal = () => {
                        //     console.log('complete', goalId)
                        // }

                        return (
                            <>
                                <div key={1} className='goals-individual-container'>
                                    {/* <input type="checkbox" onClick={completeGoal}/> */}
                                    <label>{follower}</label>
                                </div>
                            </>
                        )
                    })}
                </div>
                {/* <CreateGoalFormModal userId={userId}/> */}
            </div>
        </>
    )
}

export default MyFollowersProfilePage;