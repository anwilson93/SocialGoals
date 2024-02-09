import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchLikes } from '../../store/likes';
import LikeButton from '../LikeButton';
import UnlikeButton from '../UnlikeButton';


function CheckIfLikeGoal({ goalId }) {
    const userId = useSelector(state => state.session.user.id);

    let likes;
    const dispatch = useDispatch();

    let [likeGoal, setLikeGoal] = useState(false);

    useEffect(() => {
        dispatch(fetchLikes(userId));
    }, [dispatch, likeGoal, setLikeGoal, likes]);

    const goalsILike = useSelector(state => {
        return state.likes;
    });


    if (goalsILike) {
        likes = goalsILike.likes;
    }

    useEffect(() => {
        if (likes) {
            let i = 0;

            while (i < likes.length) {

                if (goalId === likes[i].goalId) {
                    setLikeGoal(true);
                    break;
                } else {
                    setLikeGoal(false);
                }
                i++;
            }
        } else {
            setLikeGoal(false);
        }
    }, [dispatch, likeGoal, setLikeGoal, likes, goalsILike]);



    if (likeGoal) {
        return (
            <>
                <UnlikeButton userId={userId} goalId={goalId} likeGoal={likeGoal} />
            </>
        );
    } else {
        return (
            < LikeButton userId={userId} goalId={goalId} />
        );
    }

}
export default CheckIfLikeGoal;