import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {fetchUsersIFollow} from '../../store/follow';
import FollowButton from '../FollowButton';
import './MyFollowersProfilePage.css';



function CheckIfFollowing ({follower}) {
    const username = useSelector(state => state.session.user.username);
    const userId = useSelector(state => state.session.user.id);

    let following;
    const dispatch = useDispatch();

    let [followingFollower, setFollowingFollower] = useState(false);
    
    useEffect (() => {
        dispatch(fetchUsersIFollow(username))
    }, [dispatch, followingFollower, setFollowingFollower, following])

    const usersIFollow = useSelector(state => {
       
        return state.follows.following
    });


    if (usersIFollow){
        following = usersIFollow.following
    }
    
    useEffect (() => {
        if (following) {
            let i = 0
      
        while (i<following.length){
            
            if (follower === following[i] || follower.username === following[i]){
                setFollowingFollower(true)
                break;
            }
            i++
        }
        
        }
    }, [dispatch, followingFollower, setFollowingFollower, following])

   

    if (followingFollower) {
        return (
            <div className='following-checkmark'>following <i class="fas fa-check"></i></div>
        )
    } else if (follower.username === username) {
        return null
    } else {
        return (
            < FollowButton username={username} userId={userId} usernameToFollow={follower}/>
        )
    }
 
}
export default CheckIfFollowing;