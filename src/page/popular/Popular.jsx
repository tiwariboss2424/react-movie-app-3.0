import React, { useEffect, useState } from "react";
import Card from "../cards/Cards";
import { useParams } from "react-router-dom";
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
      <h2 clasName="list-title">{(type ? type : "POPULAR ").toUpperCase()}</h2>
      <div className="list-cards">
        {popular.map((user) => {
          <Card user={user} />;
        })}
      </div>
    </div>
  );
};
export default Popular;
