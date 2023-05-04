import React, { Component } from "react";

import "../../styles/contact.css"

export const Contact = () => (

<div className="" id="ContactMe">
	<form action="https://getform.io/f/a918f8ec-4ca8-4b53-b14d-52794fb14469" method="POST">
		<h3>CONTACT ME</h3>
		<input type="text" name="Name" id="name" placeholder="Your Name" required/> 
		<input type="email" name="Email" id="email" placeholder="Your Email" required/> 
		<input type="text" name="Title" id="phone" placeholder="Title" required/> 
		<textarea  name="Message" id="message" rows="4" placeholder="Leave your message" required/> 
		<button type="submit" id="submitBtn" >Send Email</button>
	</form>
</div>
);