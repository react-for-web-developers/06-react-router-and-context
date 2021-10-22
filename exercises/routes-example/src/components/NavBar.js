import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../AppContext";

const NavBar = () => {
	const { user } = useContext(AppContext);
	return (
		<div className="navbar">
			<ul>
				<li>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/contact">Contact</Link>
					<span>Hello {user.username}! </span>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
