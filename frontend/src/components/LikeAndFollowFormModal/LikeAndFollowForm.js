import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {createGoalLike, fetchLikes, createDiaryLike, deleteGoalLike, deleteDiaryLike} from '../../store/likes';
import {createGoalFollow, fetchGoalFollows} from '../../store/follow';
import {fetchAllDiariessForGoalsAUserFollows} from '../../store/diaries';
import "./LikeAndFollowForm.css";


function LikeAndFollowForm({goalId, userId, diaryEntryId}) {
//   const dispatch = useDispatch();


// //   const userId = useSelector(state => state.session.user.id);

  
  
//   const [errors, setErrors] = useState([]);
  
//   const handleLikeSubmit = (e) => {
//       setErrors([]);
//       return dispatch(createGoalLike({userId, goalId}), dispatch(fetchLikes(userId)))
//       .catch((res) => {
//         if (res.data && res.data.errors) setErrors(res.data.errors);
//       });
//   }

//   const handleDeleteLikeSubmit = (e) => {
//       setErrors([]);
//       return dispatch(deleteGoalLike({userId, goalId}))
//       .catch((res) => {
//         if (res.data && res.data.errors) setErrors(res.data.errors);
//       });
//   }

//   const handleDeleteDiaryLikeSubmit = (e) => {
//       setErrors([]);
//       return dispatch(deleteDiaryLike({userId, diaryEntryId}))
//       .catch((res) => {
//         if (res.data && res.data.errors) setErrors(res.data.errors);
//       });
//   }

//   const handleGoalSubmit = (e) => {
//       setErrors([]);
//       return dispatch(createGoalFollow({userId, goalId}), dispatch(fetchGoalFollows(userId), dispatch(fetchAllDiariessForGoalsAUserFollows(userId))))
//       .catch((res) => {
//         if (res.data && res.data.errors) setErrors(res.data.errors);
//       });
//   }

//   const handleLikeDiarySubmit = (e) => {
//       setErrors([]);
//       return dispatch(createDiaryLike({userId, diaryEntryId}), dispatch(fetchLikes(userId)))
//       .catch((res) => {
//         if (res.data && res.data.errors) setErrors(res.data.errors);
//       });
//   }

//   if (!goalId){
//     return (
//       <>
//         <h1>Like</h1>
//         <button onClick={() => handleLikeDiarySubmit()}>Like <i className="far fa-heart"></i></button>
//         <button onClick={() => handleDeleteDiaryLikeSubmit()}>Unlike</button>
//       </>
//     )
//   }
//   return (
//     <>
//       <h1>Like or Follow</h1>
//       <button onClick={() => handleLikeSubmit()}>Like <i className="far fa-heart"></i></button>
//       <button onClick={() => handleDeleteLikeSubmit()}>Unlike</button>
//       <button onClick={() => handleGoalSubmit()}>Follow</button>
//     </>
//   );
return (
  <h1>yo</h1>
)
}

export default LikeAndFollowForm;
