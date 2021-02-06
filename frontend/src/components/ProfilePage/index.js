import SidePanel from '../SidePanel';
import {useDispatch, useSelector} from 'react-redux';
import './ProfilePage.css';

function ProfilePage () {
    const username = useSelector(state => state.session.user.username);
    return (
        <>
            {username && <h2>Welcome to your profile page, {username}!</h2>}
            <div className='main-top'>
                <SidePanel />
                {/* <button className='goals-button'>Current Goals</button> 
                <button className='goals-button'>Completed Goals</button> */}
                <div className='my-goals-container'>
                    <button className='goals-button'>Current Goals</button> 
                    <button className='goals-button'>Completed Goals</button>
                </div>
            </div>
            
        </>
    )
}

export default ProfilePage;