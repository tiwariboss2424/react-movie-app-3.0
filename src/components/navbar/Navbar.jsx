import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaUserPlus } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaGripHorizontal } from "react-icons/fa";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [icon, setIcon] = useState(true);
  const [cutIcon, setCutIcon] = useState(true);
  // const nav = document.querySelector(".media-nav");
  const change2 = () => {
    setCutIcon(!cutIcon);
    if (cutIcon) {
      setShow(true);
    } else setShow(false);
  };
  const searchMovie = (e) => {
    console.log(e.target.value);
  };
  const change = () => setIcon(!icon);

  return (
    <>
      <div className="nav-bar">
        <div className="nav-left">
          <div className="nav-list">
            <div className="media-logo">
              <Link to="/">
                <img
                  className="nav-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png "
                  alt="Logo"
                />
              </Link>
              <div className="cut-show-icon" onClick={change2}>
                {!cutIcon ? <FaTimes /> : <FaGripHorizontal />}
              </div>
            </div>
            <div className="media-nav" id={show ? "show-nav" : "hide-nav"}>
              <Link to="/movies/popular" style={{ textDecoration: "none" }}>
                <span>Popular</span>
              </Link>
              <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
                <span>Top Rated</span>
              </Link>
              <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
                <span>Upcoming</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="nav-right" id={show ? "nav-right" : "hide-nav1"}>
          Search :
          <input
            style={{
              borderRadius: "10px",
              padding: "5px",
              marginRight: "1rem",
              fontSize: "1rem",
              outline: "none"
            }}
            type="search"
            name="search"
            className="Search-tag"
            onChange={searchMovie}
          />
          <div onClick={change} className="user-icon">
            {icon ? <FaUserPlus /> : <FaUserMinus />}
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
