import React from "react";
import { Card } from "react-bootstrap";
import "./Karta.css";

const Karta = (props) => {
  return (
    <Card className="karta">
      <Card.Body>
        <Card.Title>{props.movieTitle}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.director}
        </Card.Subtitle>
        <Card.Text>{props.description}</Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Karta;
