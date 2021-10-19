import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/xing.png";
import fetchUrl from "../lib/fetch";
import { useState } from "react";

const mainNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Login",
    path: "/user",
  },
  {
    display: "Sign Up",
    path: "/sign-up",
  },
];
fetchUrl(`https://strive-jobs-api.herokuapp.com/jobs?limit=10&skip=10`, "GET");
const Header = () => {
  const [query, setQuery] = useState("");
  const [queryHistory, setQueryHistory] = useState([]);

  const search = (e, query) => {
    e.preventDefault();

    // if(e.key === "Enter"){

    // }
    if (!queryHistory.includes(query)) {
      setQueryHistory(queryHistory.concat("#" + query));
    }
    console.log(queryHistory);
    setQuery("");
  };

  const setandSearch = (e, query) => {
    const queryFix = query.slice(1, query.length);
    search(e, query);
    setQuery(queryFix);
  };
  return (
    <div className="header">
      <div className="nav">
        <div className="nav__logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="nav__menu">
          {mainNav.map((item, index) => (
            <div className="nav__menu__item" key={index}>
              <Link to={item.path}>
                <span>{item.display}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="hero">
        <div className="hero__search">
          <input
            type="text"
            className="search__bar"
            placeholder="Search for a job.."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            // onKeyDown={(e) => search(e, query)}
          />
          <button className="search__icon" onClick={(e) => search(e, query)}>
            <box-icon name="search" color="#4267b2" size="2.2rem"></box-icon>
          </button>
        </div>
        <div className="past-query-container">
          {queryHistory.length > 0 &&
            queryHistory.map((query, index) => (
              <span
                className="recent__searches__item"
                key={index}
                onClick={(e) => setandSearch(e, e.target.innerText)}
              >
                {query}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
