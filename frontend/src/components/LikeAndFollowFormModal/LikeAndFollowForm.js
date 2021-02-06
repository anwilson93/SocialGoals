import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {createGoalLike, fetchLikes} from '../../store/likes';
import {createGoalFollow, fetchGoalFollows} from '../../store/follow';
import {fetchAllDiariessForGoalsAUserFollows} from '../../store/diaries';
import "./LikeAndFollowForm.css";


function LikeAndFollowForm({goalId, userId, diaryEntryId}) {
  const dispatch = useDispatch();

  console.log(goalId, 'yooooo')
//   const userId = useSelector(state => state.session.user.id);

  
  
  const [errors, setErrors] = useState([]);
  
  const handleLikeSubmit = (e) => {
      setErrors([]);
      return dispatch(createGoalLike({userId, goalId}), dispatch(fetchLikes(userId)))
      .catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
  }

  const handleGoalSubmit = (e) => {
      setErrors([]);
      return dispatch(createGoalFollow({userId, goalId}), dispatch(fetchGoalFollows(userId), dispatch(fetchAllDiariessForGoalsAUserFollows(userId))))
      .catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
  }

  if (!goalId){
    return (
      <>
        <h1>Like</h1>
        <button onClick={() => handleLikeSubmit()}>Like <i className="far fa-heart"></i></button>
      </>
    )
  }
  return (
    <>
      <h1>Like or Follow</h1>
      <button onClick={() => handleLikeSubmit()}>Like <i className="far fa-heart"></i></button>
      <button onClick={() => handleGoalSubmit()}>Follow</button>
    </>
  );
}

export default LikeAndFollowForm;
