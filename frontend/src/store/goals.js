import { fetch } from './csrf.js';

const GET_ALL_GOALS = 'goals/getAllGoals';


const initialState = {};

const getAllGoals = (goals) => ({
  type: GET_ALL_GOALS,
  payload: goals
});

export const fetchAllGoalsForPeopleAUserFollows = (username) => {
    return async (dispatch) => {
        const res = await fetch(`/api/goals/following/${username}`)
        dispatch(
            getAllGoals(res.data.goals)
        );
    };
};


function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ALL_GOALS:
      newState = Object.assign({}, state, { goals: action.payload });
      return newState;
    // case SET_ART_PRODUCT:
    //   newState = Object.assign({}, state, { oneArtProduct: action.payload });
    //   return newState;
    default:
      return state;
  }
}

export default reducer;