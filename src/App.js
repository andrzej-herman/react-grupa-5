import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Search from "./components/search/Search";

const App = () => {
  return (
    <div className="app">
      <Container className="gr5__container">
        <Header />
        <Search />
      </Container>

      {/*<h1>Wyniki wyszukiwania</h1>*/}
    </div>
  );
};

export default App;
