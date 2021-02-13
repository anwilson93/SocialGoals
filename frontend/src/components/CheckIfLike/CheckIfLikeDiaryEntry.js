import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {fetchLikes} from '../../store/likes';
import LikeButton from '../LikeButton';
import UnlikeButton from '../UnlikeButton'


function CheckIfLikeDiaryEntry ({diaryEntryId}) {
    const userId = useSelector(state => state.session.user.id);

    let likes;
    const dispatch = useDispatch();

    let [likeDiary, setLikeDiary] = useState(false);
    
    useEffect (() => {
        return (dispatch(fetchLikes(userId)))
    }, [dispatch, likeDiary, setLikeDiary, likes])

    const diariesILike = useSelector(state => {
        return state.likes
    });


    if (diariesILike){
        likes = diariesILike.likes
    }
    
    useEffect (() => {
        if (likes) {
            let i = 0
      
            while (i<likes.length){
                
                if (diaryEntryId === likes[i].diaryEntryId){
                    setLikeDiary(true)
                    break;
                } else {
                    setLikeDiary(false)
                }
                i++
            } 
        } else {
            setLikeDiary(false)
        }
    }, [dispatch, likeDiary, setLikeDiary, likes, diariesILike])

   

    if (likeDiary) {
        return (
            <>
            <UnlikeButton userId={userId} diaryEntryId={diaryEntryId} likeDiary={likeDiary}/>
            </>
        )
    } else {
        return (
            < LikeButton userId={userId} diaryEntryId={diaryEntryId}/>
        )
    }
 
}
export default CheckIfLikeDiaryEntry;