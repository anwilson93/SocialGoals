import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {createGoalLike, fetchLikes} from '../../store/likes';
import {createGoalFollow} from '../../store/follow';
import "./LikeAndFollowForm.css";


function LikeAndFollowForm({goalId, userId}) {
  const dispatch = useDispatch();

  
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
      return dispatch(createGoalFollow({userId, goalId}))
      .catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
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
