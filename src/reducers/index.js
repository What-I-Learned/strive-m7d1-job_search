import {
  ADD_JOB_TO_FAV_LIST,
  REMOVE_JOB_FROM_FAV_LIST,
  SET_QUERY,
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
} from "../actions";
import { initialState } from "../store";

// requirecs current state, and action
export const mainReducer = (state = initialState, action) => {
  // requires at least type
  switch (action.type) {
    case ADD_JOB_TO_FAV_LIST: {
      return {
        ...state,
        jobs: {
          ...state.jobs,
          favJobs: state.jobs.favorites.concat(action.payload),
        },
      };
    }
    case REMOVE_JOB_FROM_FAV_LIST: {
      return {
        ...state,
        jobs: {
          ...state.jobs,
          favJobs: state.jobs.favorites.filter(
            (job, i) => i !== action.payload
          ),
        },
      };
    }
    case SET_QUERY: {
      return {
        ...state,
        searchQuery: { ...state.searchQuery, query: action.payload },
      };
    }
    case FETCH_JOBS_REQUEST:
      return {
        ...state,
        fetchedResults: { ...state.fetchedResults, loading: true },
      };
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        fetchedResults: {
          ...state.fetchedResults,
          loading: false,
          jobData: [...action.payload],
          error: "",
        },
      };
    case FETCH_JOBS_FAILURE:
      return {
        ...state,
        fetchedResults: {
          ...state.fetchedResults,
          loading: false,
          jobData: [],
          error: action.payload,
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
// export const getJobs = (state) => state.fetchedResults.jobs;
// export const getJobsPending = (state) => state.fetchedResults.loading;
// export const getJobsError = (state) => state.fetchedResults.error;
