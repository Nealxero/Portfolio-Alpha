import React from "react";
import { About } from "./about";
import { Contact } from "./contact";
import { Footer } from "./footer";
import { Header } from "./header.jsx";
import { Navbar } from "./navbar.jsx";
import { Projects } from "./projects";
import { Skills } from "./skills";
//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<Header/>
			<div className="border" id="About2"></div>
			<About/>
			<div className="border" id="Projects2"></div>
			<Projects/>
			<div className="border" id="Skills2"></div>
			<Skills/>
			<div className="border" id="Contact2"></div>
			<Contact/>
			<Footer/>
		</div>
	);
};

export default Home;
