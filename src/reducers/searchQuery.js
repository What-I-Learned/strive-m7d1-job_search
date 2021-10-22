import { SET_QUERY } from "../actions";
import { initialState } from "../store";

const searchQueryReducer = (state = initialState.searchQuery, action) => {
  switch (action.type) {
    case SET_QUERY: {
      return {
        ...state,
        query: action.payload,
      };
    }
    default:
      return state;
  }
};

export default searchQueryReducer;
