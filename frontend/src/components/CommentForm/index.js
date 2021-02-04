import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
// import "./CommentForm.css";

function CommentForm({visible, goalId}) {
  const [newComment, setNewComment] = useState('');
  const [errors, setErrors] = useState([]);

  const userId = useSelector(state => state.session.user.id);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newComment) {
      setErrors([]);
      let res = await fetch(`/api/comments/${goalId}`, {
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId,
        goalId: goalId,
        comment: newComment,
      }),
    });
    res = await res.json();
    console.log(userId, goalId, newComment, 'what up');
    } else {
      return setErrors(['Comment must not be empty']);
    }
    
    }

  if (!visible) return null
    return (
    <>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <label>
          <textarea
            rows='5'
            cols='33'
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
          />
        </label>
        <div>
            <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default CommentForm;