import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {createDiary} from '../../store/diaries';



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
      <h1>Create a Diary Entry</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <label>
          Entry
          <textarea
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            required
          />
        </label>
        <button type="submit">Create!</button>
      </form>
    </>
  );
}

export default CreateDiaryForm;