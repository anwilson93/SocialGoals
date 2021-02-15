import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {createGoal} from '../../store/goals';
import './CreateGoalForm.css';


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
    if (errors.length===0){
    
    setErrors([]);
      return dispatch(createGoal({ userId, name, goalType, startDate}))
        .catch(res => {
          if (res.data && res.data.errors) setErrors(res.data.errors);
        });
    }
    
    return setErrors(errors);
  };

  return (
    <>
      <h1 className='h1'>Create a Goal</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <div className='goal-entry-form-container'>
          <label className='label'> Name of Goal</label>
          <input
            className='goal-entry-field'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label className='label'> Type of Goal </label>
          <select className='goal-entry-field' value={goalType} onChange={handleGoalTypeChange} required>
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
          <label className='label'> When do you plan to start this goal? </label>
          <input
            className='goal-entry-field'
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
          <button className='create-goal-button' type="submit">Create!</button>
        </div>
      </form>
    </>
  );
}

export default CreateGoalForm;