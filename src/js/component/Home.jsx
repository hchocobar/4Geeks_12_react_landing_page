import React from "react";
// Custom Component
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";


const Home = () => {
	return (
		<div className="container">
            <Navbar/>
            <Jumbotron/>
            <div class="row g-4 p-5 mb-4 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                <Card/>
                <Card imageURL="https://chocobar.net/logo-python" cardTitle="I love Python!"/>
                <Card imageURL="https://chocobar.net/logo-reactjs" cardTitle="I develop with React, too"/>
                <Card imageURL="https://chocobar.net/hcht-uk" cardTitle="I stand with Ukraine!"/>
            </div>
            <Footer/>
		</div>
	);
};


export default Home;
