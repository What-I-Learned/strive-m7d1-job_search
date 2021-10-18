import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { useState } from "react";
import {
  Col,
  Container,
  Row,
  InputGroup,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";
import SearchResults from "./SearchResults";

// import Header from "./Header";
// import Footer from "./Header";
// import Routes from "../routes/Routes";

function Layout() {
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState([]);

  const fetchJobs = async (e, query) => {
    e.preventDefault();
    console.log(query);
    try {
      let response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${query}`
      );
      if (response.ok) {
        let data = await response.json();

        setJobs(data.data);
        console.log(jobs);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BrowserRouter>
      <Container>
        <Row className="justify-content-center">
          <Col sm={12} className="text-center">
            <h1>Job Search</h1>
          </Col>
          <Col sm={6}>
            <Form onSubmit={(e) => fetchJobs(e, query)}>
              <InputGroup className="mb-3 mt-4">
                <FormControl
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary" type="submit">
                    <box-icon name="search"></box-icon>
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
          </Col>
        </Row>
        <main className="mt-5">
          <Route
            path="/"
            exact
            render={(routerProps) => <SearchResults {...routerProps} />}
          />
          {/* <Route
            path="/cart"
            exact
            render={(routerProps) => (
              <Cart
                {...routerProps}
                cart={cart}
                removeItemFromCart={removeItemFromCart}
              />
            )}
          /> */}
        </main>
      </Container>
    </BrowserRouter>
  );
}

export default Layout;
