import {useSelector} from 'react-redux';
import { useState, useEffect } from "react";
import GoalsLiked from '../GoalsLiked';
import Unlike from '../Unlike';


function CheckLikeOrUnlike ({goalId, diaryEntryId}) {
    
    const likes = useSelector(state => {
        return state.likes.likes
    });

    if (likes.length === 0){
        return (
            <Unlike/>
        )
    }

    return (
        <>
         {likes && likes.map(like => {

             console.log('goalId', goalId, 'like.goalId', like.goalId, likes)
            
             {if (like.goalId === goalId) {
                 return (
                   <GoalsLiked goalId={goalId} />
                 )
             } else if (like.goalId !== goalId) {
                return (
                    <Unlike/>
                )
             }}
         })}
        </>
    )
}

export default CheckLikeOrUnlike;