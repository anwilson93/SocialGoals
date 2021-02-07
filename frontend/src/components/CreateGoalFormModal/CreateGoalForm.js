import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {createGoal} from '../../store/goals';
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


  const handleSubmit = (e) => {
    e.preventDefault();
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
}

export default CreateGoalForm;