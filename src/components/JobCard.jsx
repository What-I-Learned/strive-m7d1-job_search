import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Button from "./Button";

const JobCard = (props) => {
  return (
    <div className="job-card">
      <div className="job_card__title">{props.title}</div>
      <div className="job_card__comapny-name">{props.company_name}</div>
      <div className="job_card__category">{props.category}</div>
      <div className="job_card__type">{props.job_type}</div>
      <div className="job_card__posted">{props.publication_date}</div>

      <span className="like">
        <box-icon name="heart"></box-icon>
      </span>
      <Button size="sm" icon="bx bx-cart" animate={true}>
        See the add
      </Button>
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

export default JobCard;
