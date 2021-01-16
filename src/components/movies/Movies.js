import React from "react";
import "./Movies.css";
import Karta from "../card/Karta";
import { movies } from "../../data";

const Movies = (props) => {
  return (
    <div className="movies">
      {movies.map((movie) => (
        <Karta
          key={movie.title}
          movieTitle={movie.title}
          director={movie.director}
          description={movie.description}
        />
      ))}
      <h1>{props.whatToFind}</h1>
    </div>
  );
};

export default Movies;
