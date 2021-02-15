import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {createDiary} from '../../store/diaries';
import './CreateDiaryForm.css';


function CreateDiaryForm({goalId, userId}) {
  const dispatch = useDispatch();
 

  const [entry, setEntry] = useState("");
  const [errors, setErrors] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.length===0){
    
    setErrors([]);
      return dispatch(createDiary({ userId, goalId, entry}))
        .catch(res => {
          if (res.data && res.data.errors) setErrors(res.data.errors);
        });
    }
    
    return setErrors(errors);
  };

  return (
    <>
      <h1 className='h1'>Create a Diary Entry</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <div className='diary-entry-form-container'>
        <label>
          <textarea
            value={entry}
            rows='2'
            cols='80'
            className='entry-field'
            placeholder='Write your entry here' 
            onChange={(e) => setEntry(e.target.value)}
            required
          />
        </label>
        <button className='create-diary-button' type="submit">Create!</button>  
        </div>
      </form>
    </>
  );
}

export default CreateDiaryForm;