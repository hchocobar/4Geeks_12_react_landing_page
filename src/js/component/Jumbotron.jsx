import React from "react";
import PropTypes from "prop-types";


const Jumbotron = (props) => {
  return (
    <div className="text-start">
      <div className="p-5 mb-4 bg-dark rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold text-warning">{props.jumbotronTitle}</h1>
          <p className="col-md-8 fs-4 text-secondary">{props.jumbotronDescription}</p>
          <a href={props.buttonURL} className="btn btn-warning btn-lg" type="button">
            {props.buttonText}
          </a>
          <hr className="text-secondary"/>
          <div class="card-footer text-muted mt-4">
            <p>
              This and many other projects are built by students as part of the{" "} 
              <span className="text-warning">4Geeks Academy Coding Bootcamp</span>.
            </p>
          </div>
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
