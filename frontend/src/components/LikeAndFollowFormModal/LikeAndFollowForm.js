import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {createGoalLike} from '../../store/likes';
import "./LikeAndFollowForm.css";

function LikeAndFollowForm({goalId, userId}) {
  const dispatch = useDispatch();
  
//   const userId = useSelector(state => state.session.user.id);

  const [like, setLike] = useState(false);
  const [followGoal, setFollowGoal] = useState(false);
  const [errors, setErrors] = useState([]);
  
  const handleLikeSubmit = (e) => {
      setErrors([]);
      return dispatch(createGoalLike({userId, goalId}))
    //   .catch((res) => {
    //     if (res.data && res.data.errors) setErrors(res.data.errors);
    //   });
  }


  return (
    <>
      <h1>Like or Follow</h1>
      <button onClick={() => handleLikeSubmit()}>Like <i class="far fa-heart"></i></button>
      <button onClick={() => setFollowGoal(true)}>Follow</button>
    </>
  );
}

export default LikeAndFollowForm;
