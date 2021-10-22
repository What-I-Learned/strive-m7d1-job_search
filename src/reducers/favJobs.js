import { ADD_JOB_TO_FAV_LIST, REMOVE_JOB_FROM_FAV_LIST } from "../actions";
import { initialState } from "../store";

export const favJobReducer = (state = initialState.favJobs, action) => {
  // requires at least type
  switch (action.type) {
    case ADD_JOB_TO_FAV_LIST: {
      return {
        ...state,
        favorites: state.favorites.includes(action.payload)
          ? state.favorites.filter((job, i) => job !== action.payload)
          : state.favorites.concat(action.payload),
      };
    }
    case REMOVE_JOB_FROM_FAV_LIST: {
      return {
        ...state,
        favorites: state.favorites.filter((job, i) => i !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default favJobReducer;
