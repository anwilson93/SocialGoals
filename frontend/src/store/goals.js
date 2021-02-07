import { fetch } from './csrf.js';

const GET_ALL_GOALS = 'goals/getAllGoals';
const GET_COMPLETED_GOALS = 'goals/getCompletedGoals';
const RESET = 'reset/resetCompletedGoals';

const initialState = {};

const getAllGoals = (goals) => ({
  type: GET_ALL_GOALS,
  payload: goals
});

const getCompletedGoals = (completed) => ({
  type: GET_COMPLETED_GOALS,
  payload: completed
});

const reset = (reset) => ({
  type: RESET,
  payload: reset
});


export const fetchAllGoalsForPeopleAUserFollows = (username) => {
    return async (dispatch) => {
        const res = await fetch(`/api/goals/following/${username}`)
        dispatch(
            getAllGoals(res.data.goals)
        );
    };
};

export const fetchAllMyGoals = (userId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/goals/${userId}`)
        dispatch(
            getAllGoals(res.data),
            reset([])
        );
    };
};

export const fetchAllMyCompletedGoals = (userId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/goals/completed/${userId}`)
        dispatch(
            getCompletedGoals(res.data)
        );
    };
};


function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ALL_GOALS:
      newState = Object.assign({}, state, { goals: action.payload });
      return newState;
    case GET_COMPLETED_GOALS:
      newState = Object.assign({}, state, { completed: action.payload });
      return newState;
    case RESET:
      newState = Object.assign({}, state, { reset: action.payload });
      return newState;
    default:
      return state;
  }
}

export default reducer;