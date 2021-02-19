import { fetch } from './csrf.js';
import {fetchAllGoalsForPeopleAUserFollows} from './goals';

// const SET_ALL_COMMENTS = 'comments/setAllComments';



// const initialState = {};

// const setAllComments = (comments) => ({
//   type: SET_ALL_COMMENTS,
//   payload: comments
// });


// export const fetchAllComments = (goalId) => {
//     return async (dispatch) => {
//         const res = await fetch(`/api/comments/${goalId}`)
//         dispatch(
//             setAllComments(res.data)
//         );
//     };
// };


export const createGoalComment = (obj) => async (dispatch) => {
  const { userId, goalId, newComment, username } = obj;

  const res = await fetch(`/api/comments/goal`, {
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
  const res = await fetch(`/api/delete/goal/comment`, {
    method: 'POST',
     body: JSON.stringify({
            userId: userId,
            goalId: goalId,
            comment: comment
      })
  });
    dispatch(fetchAllGoalsForPeopleAUserFollows(username))
    return res
};



// function reducer(state = initialState, action) {
//   let newState;
//   switch (action.type) {
//     case SET_ALL_COMMENTS:
//       newState = Object.assign({}, state, { comments: action.payload });
//       return newState;
//     default:
//       return state;
//   }
// }

// export default reducer;