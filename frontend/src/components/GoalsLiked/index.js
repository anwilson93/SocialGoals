import {useSelector} from 'react-redux';


function GoalsLiked ({goalId}) {

    
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
             } else {
                return null
             }}
         })}
        </>
    )
}

export default GoalsLiked;