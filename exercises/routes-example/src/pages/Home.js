import React from "react";
import { useContext } from "react";
import AppContext from "../AppContext";

const Home = () => {
	const { user, setUser } = useContext(AppContext);
	return (
		<div>
			<div>
				Welcome <h2>{user.username}!</h2>
			</div>
			<button onClick={() => setUser({ username: "Random user" })}>
				Change name
			</button>
		</div>
	);
};

export default Home;
