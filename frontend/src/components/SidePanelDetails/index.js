import './SidePanelDetails.css';
import {useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';

function SidePanelDetails({visible}) {
    const username = useSelector(state => state.session.user.username);
    if (!visible) return null

    return (
        <>
            {/* <div>
                <ul className='ul'>
                    <NavLink to={`/goals`} className='link'>
                    <li className='list-item'>My Goals</li> </NavLink>
                    <div className='space-for-links'></div>
                    <NavLink to={`/diaries`} className='link'>
                    <li className='list-item'>My Diary Entries</li></NavLink>
                    <div className='space-for-links'></div>
                    <NavLink to={`/followers/${username}`} className='link'>
                    <li className='list-item'>My Followers</li></NavLink>
                </ul>
            </div> */}

            <div className='main-sidepanel-container'>
                <NavLink to='/goals'><button className='sidepanel-button'>My Goals</button></NavLink>
                <NavLink to='/diaries'><button className='sidepanel-button'>My Diary Entries</button></NavLink>
                <NavLink to='/followers'><button className='sidepanel-button'>My Followers</button></NavLink>
            </div>
        </>
    )
}


export default SidePanelDetails;