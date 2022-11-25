import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="text-center">
      <Navbar />
      <Jumbotron />
      <div class="row g-4 p-5 mb-4 row-cols-1 row-cols-md-2 row-cols-lg-3  row-cols-xl-4">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
      </div>
      <Footer/>
		</div>
	);
};

export default Home;
