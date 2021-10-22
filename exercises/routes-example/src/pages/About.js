import React from "react";
import { useContext } from "react";
import AppContext from "../AppContext";

const About = () => {
	const { user } = useContext(AppContext);
	return (
		<div>
			{user && user.username === "VK" ? (
				<h3>About {user.username}: Full stack developer</h3>
			) : (
				<h3>About {user.username}: No info</h3>
			)}
		</div>
	);
};

export default About;
