import React from "react";
import "./Movies.css";
import Karta from "../card/Karta";
import { movies } from "../../data";

const Movies = (props) => {
  // props.whatToFind

  const getMovies = (allMovies, text) => {
    if (text === null || text.length === 0) return allMovies;

    let result = [];
    allMovies.forEach((movie) => {
      if (movie.title.includes(text) || movie.director.includes(text)) {
        result.push(movie);
      }
    });

    return result;
  };

  const selectedMovies = getMovies(movies, props.whatToFind);

  return (
    <div className="movies">
      {selectedMovies.map((movie) => (
        <Karta
          key={movie.title}
          movieTitle={movie.title}
          director={movie.director}
          description={movie.description}
        />
      ))}
    </div>
  );
};

export default Movies;
