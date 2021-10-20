import React, { Component } from "react";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import Grid from "../components/Grid";
import JobCard from "../components/JobCard";
import { Link } from "react-router-dom";
// import fetchUrl from "../lib/fetch";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchJobData from "../actions/fetchJobs";

const mapStateToProps = (state) => ({
  error: state.fetchedResults.error,
  jobData: state.fetchedResults.jobData,
  loading: state.fetchedResults.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchJobs: () => {
    dispatch(fetchJobData());
  },
});

const Home = ({ error, jobData, loading }) => {
  // useEffect(() => {
  //   // let's check if the user is logged in!
  //   if (!userName) {
  //     // go back home!
  //     // let's use history
  //     // do I have history here?
  //     // yes, this is a routed component (look at App.jsx)
  //     history.replace('/')
  //   }
  // }, [])
  console.log(jobData);
  return (
    <Section>
      <SectionTitle>Jobs</SectionTitle>
      <SectionBody>
        <Grid col={4} mdCol={2} smCol={1} gap={20}>
          <Link to="/">
            <JobCard
            // name={item.name}
            // description={item.description}
            // icon={item.icon}
            />
          </Link>
        </Grid>
      </SectionBody>
    </Section>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
