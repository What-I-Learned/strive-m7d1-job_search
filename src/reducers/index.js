import {
  ADD_JOB_TO_FAV_LIST,
  REMOVE_JOB_FROM_FAV_LIST,
  SET_QUERY,
} from "../actions";
import { initialState } from "../store";

// requirecs current state, and action
export const mainReducer = (state = initialState, action) => {
  // requires at least type
  switch (action.type) {
    case ADD_JOB_TO_FAV_LIST: {
      return {
        ...state,
        favList: {
          ...state.favList,
          favJobs: state.favList.jobs.concat(action.payload),
        },
      };
    }
    case REMOVE_JOB_FROM_FAV_LIST: {
      return {
        ...state,
        favList: {
          ...state.favList,
          favJobs: state.favList.favJobs.filter(
            (job, i) => i !== action.payload
          ),
        },
      };
    }
    case SET_QUERY: {
      return {
        ...state,
        query: { ...state.query, searchQuery: action.payload },
      };
    }
    default:
      return state;
  }
};
export default mainReducer;
