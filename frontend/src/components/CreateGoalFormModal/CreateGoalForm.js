import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {createGoalLike, fetchLikes, createDiaryLike} from '../../store/likes';
import {createGoalFollow, fetchGoalFollows} from '../../store/follow';
import {fetchAllDiariessForGoalsAUserFollows} from '../../store/diaries';
import { Redirect } from "react-router-dom";


function CreateGoalForm({userId}) {
   const dispatch = useDispatch();

  const handleGoalTypeChange = (e) => {
        setGoalType(e.target.value);
  }
  const [name, setName] = useState("");
  const [goalType, setGoalType] = useState("Exercise");
  const [startDate, setStartDate] = useState("");
  const [errors, setErrors] = useState([]);

//   if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userId, goalType, startDate, 'whettttt')
    if (!errors){
    setErrors([]);
      return dispatch(createGoal({ userId, goalType, startDate}), <Redirect to='/goals' />)
        .catch(res => {
          if (res.data && res.data.errors) setErrors(res.data.errors);
        });
    }
    
    return setErrors(errors);
  };

  return (
    <>
      <h1>Create a Goal</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <label>
          Name of Goal
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Type of Goal
          <select value={goalType} onChange={handleGoalTypeChange} required>
                        <option default value="exercise">Exercise</option>
                        <option value="food">Food / Food Health</option>
                        <option value="health">Health</option>
                        <option value="mental">Mental Health</option>
                        <option value="productivity">Productivity</option>
                        <option value="self-development">Self-Development</option>
                        <option value="relationships">Relationship / Family</option>
                        <option value="diet">Weight Loss / Diet</option>
                        <option value="academic">Academic</option>
                        <option value="passion">Hobby / Personal Passion</option>
                        <option value="other">Other</option>
                    </select>
        </label>
        <label>
          When do you plan to start this goal?
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </label>
        <button type="submit">Create!</button>
      </form>
    </>
  );

//   const userId = useSelector(state => state.session.user.id);

  
  
//   const [errors, setErrors] = useState([]);
  
//   const handleLikeSubmit = (e) => {
//       setErrors([]);
//       return dispatch(createGoalLike({userId, goalId}), dispatch(fetchLikes(userId)))
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
//       </>
//     )
//   }
//   return (
//     <>
//       <h1>Like or Follow</h1>
//       <button onClick={() => handleLikeSubmit()}>Like <i className="far fa-heart"></i></button>
//       <button onClick={() => handleGoalSubmit()}>Follow</button>
//     </>
//   );
}

export default CreateGoalForm;