import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';


function SearchedUserGoals({userId, username}) {
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
                <>
                <h3>{username}'s goals</h3>

                {searchedGoals.map(goal => {
                    if (goal.userId === userId){
                        let startDate = new Date(goal.startDate).toString().slice(0, 16);
                        return (
                            <>
                            <div className='feed-container' key={goal.id}>
                                <div className='individual-container' key={goal.id}>
                                    <div> {username} started a new goal: {goal.name}</div>
                                    <div className='space'></div>
                                    <div>Start date: {startDate}</div>
                                </div>
                            </div>
                            </>
                        )       
                    }   else {
                        return (
                            <h1>No goals to display</h1>
                        )
                    }
                })}
                </>
            )
        }
    } else return null;
}

export default SearchedUserGoals;