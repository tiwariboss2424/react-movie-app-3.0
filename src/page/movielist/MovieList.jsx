import React, { useEffect, useState } from "react";
import Cards from "../cards/Cards";
import "./MovieList.css";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
const Popular = () => {
  const [popular, setPopular] = useState([]);
  const { type } = useParams();
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setPopular(data.results));
  };

  return (
    <div className="movie-list ">
      <div clasName="list-title">
        {"    "}
        {(type ? type : "POPULAR ").toUpperCase()}
      </div>
      <div className="list-cards">
        {popular.map((user) => {
          return <Cards user={user} />;
        })}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <br />
      <Footer />
      {/* {type === "POPULAR" ? <Footer /> : ""} */}
    </div>
  );
};
export default Popular;
