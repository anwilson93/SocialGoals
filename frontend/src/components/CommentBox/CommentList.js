import "./CommentBox.css";
import DeleteButton from '../DeleteButton';

function CommentList({visible, userId, goalId, comments}) {
  
 
  if (!visible) return null
  if (comments.length>0){
    return (
      <>
      {comments && comments.map(comment => {
        let username = comment.User.username
        let commentUserId = comment.userId
        let commentText = comment.comment
        
        //if user made comment, allow the ability to delete it
        if (commentUserId === userId){
            return (
                <>
                    <div> 
                      <p className='comment-username'> {username}: </p> 
                      <p className='comment-text'>{commentText} </p>
                      <DeleteButton comment={commentText} userId={userId} goalId={goalId}/></div>
                </>
            )
        } else {
            return (
                <>
                    <div>
                      <p className='comment-username'> {username}: </p> 
                      <p className='comment-text'>{commentText}</p>
                    </div>
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