import React from "react";


//include images into your bundle

//create your first component
const Navbar = () => {
	return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://chocobar.net/hcht" alt="Logo" width="30" height="30" className="d-inline-block align-text-top"/>
            <span className="p-2">Bootstrap</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* para alinear el menú a la derecha se agrega 'justify-content-end' en el div, y se elimina 'me-auto' en la ul*/}
          <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo01">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
	);
};

export default Navbar;

