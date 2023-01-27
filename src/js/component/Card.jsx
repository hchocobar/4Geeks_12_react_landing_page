import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
	return (
    <div className="col text-start mb-4">
      <div className="card h-100 p-2">
        <img src={props.imageURL} className="card-img-top" alt={props.imageAlt}/>
        <div className="card-body">
          <h5 className="card-title">{props.cardTitle}</h5>
          <p className="card-text">{props.cardDescription}</p>
          <a href={props.buttonURL} className="btn btn-primary">{props.buttonText}</a>
        </div>
      </div>
    </div>
	);
};

Card.propTypes = {
  imageURL: PropTypes.string,
  imageAlt: PropTypes.string,
  cardTitle: PropTypes.string,
  cardDescription: PropTypes.string,
  buttonURL: PropTypes.string,
  buttonText: PropTypes.string,
};

Card.defaultProps = {
  imageURL: "https://chocobar.net/hcht",
  imageAlt: "Logo de Héctor Chocobar-Torrejón",
  cardTitle: "Card title",
  cardDescription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  buttonURL: "#",
  buttonText: "Go somewhere"
};

export default Card;

