import './SidePanelDetails.css';
import {useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';

function SidePanelDetails({visible}) {
    const sessionUser = useSelector(state => {
        return state.session.user
    });
    if (!visible || !sessionUser) return null

    return (
        <>
            <div className='main-sidepanel-container'>
                <NavLink to='/goals'><button className='sidepanel-button'>My Goals</button></NavLink>
                <NavLink to='/diaries'><button className='sidepanel-button'>My Diary Entries</button></NavLink>
                <NavLink to='/followers'><button className='sidepanel-button'>My Followers</button></NavLink>
            </div>
        </>
    )
}


export default SidePanelDetails;