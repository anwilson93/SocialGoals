import React, { useState } from "react";
// import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LikeAndFollowForm.css";

function LikeAndFollowForm() {
  const dispatch = useDispatch();
 
  const [like, setLike] = useState(false);
  const [followGoal, setFollowGoal] = useState(false);
  

  return (
    <>
      <h1>Like or Follow</h1>
      <button onClick={() => setLike(true)}>Like <i class="far fa-heart"></i></button>
      <button onClick={() => setFollowGoal(true)}>Follow</button>
    </>
  );
}

export default LikeAndFollowForm;
