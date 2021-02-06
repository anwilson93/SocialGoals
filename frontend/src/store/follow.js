import { fetch } from './csrf.js';

const SET_FOLLOW_GOAL = 'follow/setFollowGoal';



const initialState = {};

const setFollowGoal = (follows) => ({
  type: SET_FOLLOW_GOAL,
  payload: follows
});


export const fetchGoalFollows = (userId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/goals/following/goal/${userId}`)
        dispatch(
            setFollowGoal(res.data)
        );
    };
};


export const createGoalFollow = (obj) => async (dispatch) => {
  const { userId, goalId } = obj;
  const res = await fetch(`/api/follow/${goalId}`, {
    method: 'POST',
     body: JSON.stringify({
            userId: userId,
            goalId: goalId
      })
  });
    dispatch(fetchGoalFollows(userId))
    return res.data
};



function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_FOLLOW_GOAL:
      newState = Object.assign({}, state, { follows: action.payload });
      return newState;
    // case GET_USER:
    //   newState = Object.assign({}, state, { user: action.payload });
    //   return newState;
    default:
      return state;
  }
}

export default reducer;