import {
  fetchAllJobs,
  fetchAllJobsSucess,
  fetchAllJobsFailure,
} from "../actions/index";

function fetchJobs() {
  return async (dispatch) => {
    try {
      dispatch(fetchAllJobs());
      const resp = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?limit=10&skip=10"
      );
      if (resp.ok) {
        const data = await resp.json();
        console.log(data);
        dispatch(fetchAllJobsSucess(data));
        return data;
      }
    } catch (err) {
      dispatch(fetchAllJobsFailure(err));
    }

    // fetch("https://strive-jobs-api.herokuapp.com/jobs?limit=10&skip=10")
    //   .then((res) => res.json())
    //   .then((res) => {
    //     if (res.error) {
    //       throw res.error;
    //     }
    //     dispatch(fetchAllJobsSucess(res.products));
    //     return res.products;
    //   })
    //   .catch((error) => {
    //     dispatch(fetchAllJobsFailure(error));
    //   });
  };
}

export default fetchJobs;
