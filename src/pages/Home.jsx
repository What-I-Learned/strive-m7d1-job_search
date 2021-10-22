import React from "react";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import Grid from "../components/Grid";
import JobCard from "../components/JobCard";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import fetchJobAction from "../actions/fetchJobs";

const mapStateToProps = (state) => ({
  error: state.fetchedJobs.error,
  jobData: state.fetchedJobs.jobData,
  loading: state.fetchedJobs.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getJobs: () => {
    dispatch(fetchJobAction());
  },
});

class Home extends React.Component {
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

  componentDidMount = async () => {
    // I'll need to invoke my action creator!
    this.props.getJobs();
  };

  render() {
    // console.log(this.state.favoriteJobList);
    return (
      <Section>
        <SectionTitle></SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} row_gap={5} column_gap={25}>
            {this.props.jobData.map((job, index) => (
              <JobCard
                key={index}
                job={job}
                //  description={item.description}
                //  icon={item.icon}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
