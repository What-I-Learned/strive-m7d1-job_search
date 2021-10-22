import {
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
} from "../actions";
import { initialState } from "../store";

// requirecs current state, and action
export const fetchedJobsReducer = (
  state = initialState.fetchedJobs,
  action
) => {
  // requires at least type
  switch (action.type) {
    case FETCH_JOBS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        jobData: action.payload,
      };
    case FETCH_JOBS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default fetchedJobsReducer;
