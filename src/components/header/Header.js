import React from "react";
import "./Header.css";
import { Button, Jumbotron } from "react-bootstrap";

const Header = () => {
  return (
    <Jumbotron className="jumbo">
      <h1>Filmoteka</h1>
      <p>Katalog filmów wraz z wyszukiwarką tytułów, aktorów i reżyserów</p>
      <p>
        <Button variant="primary">Zobacz polecane filmy</Button>
      </p>
    </Jumbotron>
  );
};

export default Header;
