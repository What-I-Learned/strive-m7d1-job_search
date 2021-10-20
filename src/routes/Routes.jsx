import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import JobList from "../pages/JobList";
import JobCard from "../components/JobCard";
import CompanyDetails from "../pages/CompanyDetails";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/job/:id" component={JobCard} />
      <Route path="/company-details/:id" component={CompanyDetails} />
      <Route path="/joblist" component={JobList} />
    </Switch>
  );
}
export default Routes;
