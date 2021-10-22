import {
  fetchAllJobs,
  fetchAllJobsSucess,
  fetchAllJobsFailure,
} from "../actions/index";

function fetchJobs() {
  return async (dispatch) => {
    console.log("...fetching jobs");

    dispatch(fetchAllJobs(true));
    try {
      let resp = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?limit=15&skip=0"
      );
      if (resp.ok) {
        let jobs = await resp.json();
        console.log(jobs.data);
        dispatch(fetchAllJobsSucess(jobs.data));
        dispatch(fetchAllJobsFailure(false));
        dispatch(fetchAllJobs(false));
      } else {
        console.log("error");
        dispatch(fetchAllJobs(false));
        dispatch(fetchAllJobsFailure(true));
      }
    } catch (err) {
      console.log(err);
      dispatch(fetchAllJobs(false));
      dispatch(fetchAllJobsFailure(true));
    }
  };
}

export default fetchJobs;
