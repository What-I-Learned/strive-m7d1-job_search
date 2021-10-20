import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/xing.png";

import { connect } from "react-redux";

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

class Header extends React.Component {
  state = {
    query: "",
    queryHistory: [],
    isActive: false,
  };

  // const [query, setQuery] = useState("");
  // const [queryHistory, setQueryHistory] = useState([]);
  // const [blur, setBlur] = useState(false);

  search = (e, query) => {
    e.preventDefault();
    if (!this.state.queryHistory.includes(query) && query !== "") {
      this.setState(this.state.queryHistory.concat("#" + query));
    }
    console.log(this.state.queryHistory);
    this.setState({ query: "" });
    this.setState({ blur: false });
  };

  setandSearch = (e, query) => {
    const queryFix = query.slice(1, query.length);
    this.setState({ blur: true });
    this.search(e, query);
    this.setState({ query: queryFix });
  };
  render() {
    return (
      <div className="header">
        <div
          className={`header__image ${
            this.state.isActive && "add__background-blur"
          }`}
        ></div>
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
              value={this.state.query}
              onChange={(e) => this.setState({ query: e.target.value })}
              onClick={(e) => this.setState({ isActive: !this.state.isActive })}
              onBlur={(e) => this.setState({ isActive: false })}
              onKeyDown={(e) => {
                if (e.key === "Enter") this.search(e, this.state.query);
              }}
            />
            <button
              className="search__icon"
              onClick={(e) => this.search(e, this.state.query)}
            >
              <box-icon name="search" color="#4267b2" size="2.2rem"></box-icon>
            </button>
          </div>
          <div className="past-query-container">
            {this.state.queryHistory.length > 0 &&
              this.state.queryHistory.map((query, index) => (
                <span
                  className="recent__searches__item"
                  key={index}
                  onClick={(e) => this.setandSearch(e, e.target.innerText)}
                >
                  {query}
                </span>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
