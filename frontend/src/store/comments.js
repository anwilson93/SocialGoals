import { fetch } from './csrf.js';
import {fetchAllGoalsForPeopleAUserFollows} from './goals';


export const createGoalComment = (obj) => async (dispatch) => {
  const { userId, goalId, newComment, username } = obj;

  const res = await fetch(`/api/comments/goal/create`, {
    method: 'POST',
     body: JSON.stringify({
            userId: userId,
            goalId: goalId,
            comment: newComment
      })
  });
    dispatch(fetchAllGoalsForPeopleAUserFollows(username))
    return res
};


export const deleteGoalComment = (obj) => async (dispatch) => {
  const { userId, goalId, comment, username } = obj;
  const res = await fetch(`/api/comments/goal/delete`, {
    method: 'DELETE',
     body: JSON.stringify({
            userId: userId,
            goalId: goalId,
            comment: comment
      })
  });
    dispatch(fetchAllGoalsForPeopleAUserFollows(username))
    return res
};
