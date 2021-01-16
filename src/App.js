import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Movies from "./components/movies/Movies";

const App = () => {
  const [searchData, setSearchData] = useState(null);
  const userSearched = (film) => {
    setSearchData(film);
  };

  return (
    <div className="app">
      <Container className="gr5__container">
        <Header />
        <Search onSearch={userSearched} />
        <Movies whatToFind={searchData} />
      </Container>
    </div>
  );
};

export default App;
