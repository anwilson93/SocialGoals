import { useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {createComment} from '../../store/comments';
// import "./CommentForm.css";

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
    
    return dispatch(createComment({userId, goalId, newComment}),
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