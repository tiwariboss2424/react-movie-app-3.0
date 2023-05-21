import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovie(data.results));
  }, []);

  return (
    <>
      <div className="banner">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovie.map((user) => {
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/user/${user.id}`}
            >
              <h1>Popular Movies</h1>
              <div className="poster">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    user && user.backdrop_path
                  }`}
                  alt="loading "
                />
              </div>
              <div className="poster-overlay">
                <div className="poster-title">
                  {user ? user.original_title : ""}
                </div>
                <div className="poster">
                  {user ? user.release_date : ""}
                  {console.log(user.release_date)}
                  <span className="poster-rating">
                    {user ? user.vote_average : ""}
                    {/* <i className="fas fa-star" />{" "} */}
                  </span>
                </div>
                <div className="poster-description">
                  {user ? user.overview : ""}
                  {console.log(user.overview)}
                </div>
              </div>
            </Link>;
          })}
        </Carousel>
      </div>
    </>
  );
};
export default Home;
