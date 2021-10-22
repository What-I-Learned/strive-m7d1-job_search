import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import { addToFavList, removeJob } from "../actions/index";

import Button from "./Button";

// mapDispatchToProps is a function returning an object
// const mapDispatchToProps = (dispatch) => ({
//   // we need a way of adding the selectedBook to the cart products array
//   addToFavorites: (job) => {
//     dispatch(addToFavList(job));
//   },
// });

// const mapStateToProps = (state) => ({
//   userName: state.user.userName,
// });

const JobCard = ({ favJobs, job }) => {
  const dispatch = useDispatch();
  const favoriteJobList = useSelector((state) => state.favJobs.favorites);
  const userName = useSelector((state) => state.user.userName);
  const addToFavorites = (job) => dispatch(addToFavList(job));
  const removeFromFavorites = (job) => dispatch(removeJob(job));

  const [selectedJob, selectJob] = useState([]);
  const [isOver, setIsOver] = useState(false);
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
    over: false,
  });

  // onClick={(e) => this.setState({ isActive: !this.state.isActive })}

  useEffect(() => {
    // console.log(selectedJob);
  }, []);
  const moveShadow = (e) => {
    if (
      e.target.className === "job_card" ||
      e.target.parentNode.className === "job_card" ||
      e.target.parentNode.parentNode.className === "job_card"
    ) {
      const rect = e.target.getBoundingClientRect();
      const midXPoints = e.clientX - (rect.left + e.target.offsetWidth / 2);
      const midYPoints = e.clientY - (rect.top + e.target.offsetHeight / 2);
      const xWalk = Math.round(midXPoints / 15) * -1;
      const yWalk = Math.round(midYPoints / 15) * -1;

      setCoords({ x: xWalk, y: yWalk, over: true });
    }
  };
  const addToFavoriteJobs = (e, job) => {
    console.log("jobid " + job._id);
    console.log("yeas");
    selectJob(selectedJob.concat(job));
    e.target.classList.add("clicked");
    addToFavorites(job);

    // console.log(favoriteJobList.includes(job._id));
  };
  const removeFromFavorit = (e, job) => {
    console.log("no");

    removeFromFavorites(job);
    e.target.classList.remove("clicked");
    selectJob(selectedJob.filter((s) => job._id !== s._id));
    // console.log(favoriteJobList.includes(job._id));
  };

  const addClass = (e) => {};
  return (
    <div
      className="job_card"
      onMouseMove={(e) => moveShadow(e)}
      onMouseLeave={(e) => setCoords({ x: 0, y: 0, over: false })}
      style={{
        boxShadow: coords.over
          ? `
        ${coords.x}px ${coords.y}px 10px 1px rgba(28, 92, 189, 0.20)
      `
          : `0px 0px 10px 0px rgba(28, 92, 189, 0.05)`,
      }}
    >
      <span
        className="job_card__like"
        // onMouseOver={(e) => console.log(e.target)}
        onClick={(e) => {
          selectedJob.includes(job._id) === true
            ? removeFromFavorit(e, job)
            : addToFavoriteJobs(e, job);
        }}
      >
        <svg
          className="like-heart"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          // style={{
          //   fill: favoriteJobList.includes(job._id) ? `#d74a41` : `transparent`,
          // }}
        >
          <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path>
        </svg>
      </span>
      <div className="job_card__top">
        <div className="job_card__top__comapny-name">{job.company_name}</div>
        <div className="job_card__top__comapny-location">
          {job.candidate_required_location}
        </div>
      </div>

      <div className="job_card__title">{job.title}</div>
      <div className="job_card__middle">
        {" "}
        <div className="job_card__middle__category">{job.category}</div>
        <div className="job_card__middle__type">
          {job.job_type.split("_").join(" ")}
        </div>
      </div>

      <div className="job_card__posted">
        {" "}
        Posted on:
        {job.publication_date.split("T").slice(0, 1)}
      </div>
      <div className="job_card__footer">
        <button className="job_card__footer_button">See the add</button>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  title: PropTypes.string.isRequired,
  company_name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  job_type: PropTypes.string.isRequired,
  publication_date: PropTypes.instanceOf(Date).isRequired,
};

export default connect(null, null)(JobCard);
