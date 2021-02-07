import {useSelector} from 'react-redux';


function GoalsLiked ({goalId, diaryEntryId}) {

    
    const likes = useSelector(state => {
        return state.likes.likes
    });

    return (
        <>
         {likes && likes.map(like => {
            
             {if (like.goalId === goalId) {
                 return (
                     <h1>liked</h1>
                 )
             } else if (like.diaryEntryId === diaryEntryId) {
                return (
                    <h1>like</h1>
                )
             }}
         })}
        </>
    )
}

export default GoalsLiked;