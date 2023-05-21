import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./Cards.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cards = ({ user }) => {
  const [checkLoading, setCheckLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setCheckLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {checkLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          className="link"
          style={{ height: "50vh", margin: "0px" }}
          to={`/movie/${user.id}`}
        >
          <div className="cards">
            <img
              ClassName="cards-img"
              src={`https://image.tmdb.org/t/p/original${
                user ? user.poster_path : ""
              }`}
              alt=""
            />
            <div className="upper-card">
              <div className="cards_title">
                {user ? user.original_title : ""}
              </div>
              <div className="cards_runtime">
                {user ? user.release_date : ""}
                <span className="card-rating">
                  {user ? user.vote_average : ""}
                  <FaStar />{" "}
                </span>
              </div>
              <div className="cards-description">
                {user ? user.overview.slice(0, 110) : ""}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};
export default Cards;
