import { fetch } from './csrf.js';

const GET_ALL_DIARIES = 'diaries/getAllDiaries';



const initialState = {};

const getAllDiaries = (diaries) => ({
  type: GET_ALL_DIARIES,
  payload: diaries
});


export const fetchAllDiariessForGoalsAUserFollows = (userId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/diary/following/${userId}`)
        dispatch(
            getAllDiaries(res.data.diaries)
        );
    };
};



function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ALL_DIARIES:
      newState = Object.assign({}, state, { diaries: action.payload });
      return newState;
    // case GET_USER:
    //   newState = Object.assign({}, state, { user: action.payload });
    //   return newState;
    default:
      return state;
  }
}

export default reducer;