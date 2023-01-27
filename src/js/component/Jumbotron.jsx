import React from "react";
import PropTypes from "prop-types";


const Jumbotron = (props) => {
	return (
		<div className="text-start">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">{props.jumbotronTitle}</h1>
          <p className="col-md-8 fs-4">{props.jumbotronDescription}</p>
          <a href={props.buttonURL} className="btn btn-primary btn-lg" type="button">{props.buttonText}</a>
        </div>
      </div>
		</div>
	);
};


Jumbotron.propTypes = {
  jumbotronTitle: PropTypes.string,
  jumbotronDescription: PropTypes.string,
  buttonURL: PropTypes.string,
  buttonText: PropTypes.string,
};


Jumbotron.defaultProps = {
  jumbotronTitle: "Custom jumbotron",
  jumbotronDescription: "Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.",
  buttonURL: "#",
  buttonText: "Example button"
};


export default Jumbotron;
