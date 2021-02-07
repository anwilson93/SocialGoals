import './SidePanelDetails.css';
import {useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';

function SidePanelDetails({visible}) {
    const username = useSelector(state => state.session.user.username);
    if (!visible) return null

    return (
        <>
            <div>
                <ul className='ul'>
                    <NavLink to={`/goals`} className='link'>
                    <li className='list-item'>My Goals</li> </NavLink>
                    <div className='space-for-links'></div>
                    <NavLink to={`/entries/${username}`} className='link'>
                    <li className='list-item'>My Diary Entries</li></NavLink>
                    <div className='space-for-links'></div>
                    <NavLink to={`/followers/${username}`} className='link'>
                    <li className='list-item'>My Followers</li></NavLink>
                </ul>
            </div>
        </>
    )
}


export default SidePanelDetails;