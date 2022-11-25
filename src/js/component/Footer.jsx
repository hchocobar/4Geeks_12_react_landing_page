import React from "react";

//create your first component
const Footer = () => {
	return (
		<div className="text-center">
      <div className="container-fluid">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <img src="https://chocobar.net/hcht" alt="Logo" width="30" height="30" className="d-inline-block align-text-top"/>
            </a>
            <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a className="text-muted" href="#">Gh</a></li>
            <li className="ms-3"><a className="text-muted" href="#">In</a></li>
            <li className="ms-3"><a className="text-muted" href="#">IG</a></li>
          </ul>
        </footer>
      </div>
		</div>
	);
};

export default Footer;

