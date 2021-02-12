import { fetch } from './csrf.js';

const SET_SEARCH = 'search/setSearch';

const initialState = {};

const setSearch = (search) => ({
  type: SET_SEARCH,
  payload: search
});

export const search = (searchTerm) => {
    return async (dispatch) => {
        const res = await fetch(`/api/search/${searchTerm}`)
        dispatch(
            setSearch(res.data)
        );
    };
};


function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_SEARCH:
      newState = Object.assign({}, state, { search: action.payload });
      return newState;
    default:
      return state;
  }
}

export default reducer;