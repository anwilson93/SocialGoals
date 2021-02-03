import { fetch } from './csrf.js';

const GET_ALL_GOALS = 'goals/getAllGoals';
const GET_USER = 'user/getUser';


const initialState = {};

const getAllGoals = (goals) => ({
  type: GET_ALL_GOALS,
  payload: goals
});

const getUser = (user) => ({
  type: GET_USER,
  payload: user
});

export const fetchAllGoalsForPeopleAUserFollows = (username) => {
    return async (dispatch) => {
        const res = await fetch(`/api/goals/following/${username}`)
        dispatch(
            getAllGoals(res.data.goals)
        );
    };
};

export const fetchUser = (userId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/users/${userId}`)
        dispatch(
            getUser(res.data.user)
        );
    };
};


function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ALL_GOALS:
      newState = Object.assign({}, state, { goals: action.payload });
      return newState;
    case GET_USER:
      newState = Object.assign({}, state, { user: action.payload });
      return newState;
    default:
      return state;
  }
}

export default reducer;