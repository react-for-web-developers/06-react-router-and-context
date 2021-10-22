import React from "react";
import { useContext } from "react";
import AppContext from "../AppContext";

const Contact = () => {
	const { user } = useContext(AppContext);

	return (
		<div>
			{user && user.username === "VK" ? (
				<>
					Contact {user.username} at:
					<h3>user@email.com</h3>
				</>
			) : (
				<h3>No contact info for {user.username}</h3>
			)}
		</div>
	);
};

export default Contact;
