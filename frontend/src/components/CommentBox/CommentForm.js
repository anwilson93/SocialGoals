import { useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {createGoalComment} from '../../store/comments';
import "./CommentBox.css";

function CommentForm({visible, goalId}) {
  const [newComment, setNewComment] = useState('');
  const [errors, setErrors] = useState([]);
  // const [vis, setVisible] = useState(true)

  const dispatch = useDispatch();

  const userId = useSelector(state => state.session.user.id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newComment) {
      setErrors([]);
    
    return dispatch(createGoalComment({userId, goalId, newComment}),
      setNewComment(''),
      // setVisible(false),
    )
      .catch(res => {
          if (res.data && res.data.errors) setErrors(res.data.errors);
        });
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
          <textarea
            className='leave-a-comment-box'
            rows='2'
            cols='44'
            placeholder='Leave a comment here'
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
          />
        <div>
            <button className='comment-submit' type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default CommentForm;