import React from "react";
// Custom Component
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

// Import images
import logo4Geeks from "../../img/logo-4geeks.png";
import logoPython from "../../img/logo-python.png";
import logoReactJS from "../../img/logo-reactjs.png";
import logoHCHT from "../../img/logo-hcht-uk.jpg";

const Home = () => {
    let title = "Landing Page with React";
    let description = "The key of this project is to help you understand how to pick the components that you want to build, you have to think the best way to organize and avoid future errors."

	return (
		<div className="container">
            <Navbar/>
            <Jumbotron jumbotronTitle={title} jumbotronDescription={description}/>
            <div class="row g-4 p-5 mb-4 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                <Card imageURL={logo4Geeks} cardTitle={"I enjoy teaching!"}/>
                <Card imageURL={logoPython} cardTitle="I love Python!"/>
                <Card imageURL={logoReactJS} cardTitle="I develop with React, too"/>
                <Card imageURL={logoHCHT} cardTitle="I stand with Ukraine!"/>
            </div>
            <Footer/>
		</div>
	);
};


export default Home;
