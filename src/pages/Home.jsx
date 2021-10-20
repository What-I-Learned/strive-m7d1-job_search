import React from "react";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import Grid from "../components/Grid";
import JobCard from "../components/JobCard";
import { Link } from "react-router-dom";
import fetchUrl from "../lib/fetch";

class Home extends React.Component {
  state = {
    jobs: [],
  };

  render() {
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
  }
}

export default Home;
