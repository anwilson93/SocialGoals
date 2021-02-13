// import {useSelector} from 'react-redux';
// import { useState, useEffect } from "react";
// import GoalsLiked from '../GoalsLiked';
// import Unlike from '../UnlikeButton';


// function CheckLikeOrUnlike ({goalId, diaryEntryId}) {
    
//     const likes = useSelector(state => {
//         return state.likes.likes
//     });


//     if (likes){
//         if (likes.length === 0) {
//             return (
//                 <Unlike />
//             )
//         }
//     }

//     return (
//         <>
//          {likes && likes.map(like => {

//              console.log('goalId', goalId, 'like.goalId', like.goalId, likes)
//              console.log('diaryId', diaryEntryId, 'like.diaryId', like.diaryEntryId, likes)
            
//              {if (like.goalId === goalId || like.diaryEntryId === diaryEntryId) {
//                  return (
//                    <GoalsLiked goalId={goalId} diaryEntryId={diaryEntryId}/>
//                  )
//              } else if (like.goalId !== goalId || like.diaryEntryId !== diaryEntryId) {
//                 return (
//                     <Unlike/>
//                 )
//              }}
//          })}
//         </>
//     )
// }

// export default CheckLikeOrUnlike;