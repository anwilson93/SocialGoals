import { useSelector} from 'react-redux';
import "./CommentBox.css";
import DeleteButton from '../DeleteButton';

function CommentList({visible, userId, goalId}) {
  const comments = useSelector(state => {
      return state.comments.comments
    });
 
  if (!visible) return null
  if (comments.length>0){
    return (
      <>
      {comments && comments.map(comment => {
        let username = comment.User.username
        let commentUserId = comment.userId
        let commentText = comment.comment
        if (commentUserId === userId){
            return (
                <>
                    <div> <p className='comment-username'> {username}: </p> {commentText} <DeleteButton comment={commentText} userId={userId} goalId={goalId}/></div>
                </>
            )
        } else {
            return (
                <>
                    <div> <p className='comment-username'> {username}: </p> {commentText}</div>
                </>
            )
        }
      })}
      </>
    )
  } else {
    return (
      <div>No Comments!</div>
    )
  }
}

export default CommentList;