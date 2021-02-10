import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {fetchUsersIFollow} from '../../store/follow';



function CheckIfFollowing ({follower}) {
    const username = useSelector(state => state.session.user.username);

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
            
            if (follower === following[i]){
                setFollowingFollower(true)
                break;
            }
            i++
        }
        
        }
    }, [dispatch, followingFollower, setFollowingFollower, following])


    if (followingFollower) {
        return (
            <button>following</button>
        )
    } else {
        return (
            null
        )
    }
 
}
export default CheckIfFollowing;