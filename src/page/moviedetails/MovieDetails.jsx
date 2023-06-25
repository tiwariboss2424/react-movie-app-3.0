import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieList from "../movielist/MovieList";
import Footer from "../../components/footer/Footer";
import "./MovieDetails.css";
const MovieDetails = () => {
  const [poster, setPoster] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setPoster(data));
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="details-wrap">
        <div className="backimage">
          <img
            src={`https://image.tmdb.org/t/p/original${
              poster ? poster.backdrop_path : ""
            }`}
            alt="loading "
          />
          <div className="poster1">
            <div className="p-card">
              <img
                src={`https://image.tmdb.org/t/p/original${
                  poster ? poster.poster_path : ""
                }`}
                alt="loading "
              />
            </div>
            <div className="content">
              <h1>{poster ? poster.original_title : ""}</h1>
              <span>{poster ? poster.tagline : ""}</span>
              <span>Popularity: {poster ? poster.popularity : ""}</span>
              <p>{poster ? poster.release_data : ""}</p>
              <div className="movie-geners">
                {poster && poster.genres
                  ? poster.genres.map((genre) => {
                      <>
                        <span className="movie_genres2" id={genre.id}>
                          {genre.name}
                        </span>
                      </>;
                    })
                  : ""}
                <div className="movie_links">
                  <div className="movie_heading">Useful Links</div>
                  {poster && poster.homepage && (
                    <a
                      className="linktag"
                      href={poster.homepage}
                      target="_blank"
                    >
                      Home Page
                    </a>
                  )}
                  {poster && poster.imdb_id && (
                    <a
                      className="linktag"
                      href="https://www.imdb.com"
                      target="_blank"
                    >
                      Imdb Website
                    </a>
                  )}
                </div>
                <div className="movie_heading">Production Companies</div>
                <div className="movie_production">
                  {poster &&
                    poster.production_companies &&
                    poster.production_companies.map((company) => {
                      <>
                        {company.logo_path && (
                          <span className="productionImage">
                            <h1>{company.name}</h1>
                            <img
                              className="movie-productioncompany"
                              src={`https://image.tmdb.org/t/p/original${company.logo_path}`}
                            />
                          </span>
                        )}
                      </>;
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MovieList />
    </>
  );
};
export default MovieDetails;
