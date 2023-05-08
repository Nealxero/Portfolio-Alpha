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
			<div className="border"></div>
			<About/>
			<div className="border"></div>
			<Skills/>
			<div className="border"></div>
			<Projects/>
			<div className="border"></div>
			<Contact/>
			<Footer/>
		</div>
	);
};

export default Home;
