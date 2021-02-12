import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';


function SearchedUserGoals({userId}) {
  const search = useSelector(state => {
        return state.search.search
    });

    let searchedGoals;

    if (search){
        searchedGoals = search.goals
        
        if (searchedGoals.length ===0){
            return (
                <h1 className='h1'>No goals to display</h1>
            )
        } else {
            return (
                searchedGoals.map(goal => {
                    console.log(goal.userId, 'yoooo', userId)
                    if (goal.userId === userId){
                        return (
                            <>
                                <div key={goal.id}>{goal.name}</div>
                            </>
                        )       
                    } else {
                        return (
                            <h1>No goals to display</h1>
                        )
                    }
            })
            )
        }
    } else return null;
}

export default SearchedUserGoals;