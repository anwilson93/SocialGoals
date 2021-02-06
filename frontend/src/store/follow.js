import { fetch } from './csrf.js';

const SET_FOLLOW_FOR_GOALS = 'follow/setGoalFollow';



const initialState = {};

const setFollowForGoal = (follow) => ({
  type: SET_FOLLOW_FOR_GOALS,
  payload: follow
});


// export const fetchLikes = (userId) => {
//     return async (dispatch) => {
//         const res = await fetch(`/api/likes/user/${userId}`)
//         dispatch(
//             setLikes(res.data)
//         );
//     };
// };


export const createGoalFollow = (obj) => async (dispatch) => {
  const { userId, goalId } = obj;
  const res = await fetch(`/api/follow/${goalId}`, {
    method: 'POST',
     body: JSON.stringify({
            userId: userId,
            goalId: goalId
      })
  });
    // dispatch(fetchLikes(userId))
    return res.data
};



function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_FOLLOW_FOR_GOALS:
      newState = Object.assign({}, state, { follow: action.payload });
      return newState;
    // case GET_USER:
    //   newState = Object.assign({}, state, { user: action.payload });
    //   return newState;
    default:
      return state;
  }
}

export default reducer;