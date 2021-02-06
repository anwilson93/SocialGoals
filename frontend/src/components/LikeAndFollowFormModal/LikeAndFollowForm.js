import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {createGoalLike, fetchLikes} from '../../store/likes';
import "./LikeAndFollowForm.css";
import { useHistory } from "react-router-dom";

function LikeAndFollowForm({goalId, userId}) {
  const dispatch = useDispatch();
  const history = useHistory();
  
//   const userId = useSelector(state => state.session.user.id);

  
  const [followGoal, setFollowGoal] = useState(false);
  const [errors, setErrors] = useState([]);
  
  const handleLikeSubmit = (e) => {
      setErrors([]);
      return dispatch(createGoalLike({userId, goalId}), dispatch(fetchLikes(userId)))
      .catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
  }


  return (
    <>
      <h1>Like or Follow</h1>
      <button onClick={() => handleLikeSubmit()}>Like <i className="far fa-heart"></i></button>
      <button onClick={() => setFollowGoal(true)}>Follow</button>
    </>
  );
}

export default LikeAndFollowForm;
