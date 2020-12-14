import React, { useState } from "react";
import "./Search.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const Search = () => {
  const [film, setFilm] = useState("");

  const userTyped = (event) => {
    setFilm(event.target.value);
  };

  const userSearch = () => {};

  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="proszę wpisać tytuł lub nazwisko aktora"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={film}
          onChange={userTyped}
        />
        <InputGroup.Append>
          <Button onClick={userSearch} variant="primary">
            Szukaj filmów
          </Button>
        </InputGroup.Append>
      </InputGroup>
      <p>{film}</p>
    </>
  );
};

export default Search;
