import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Contact from "./pages/Contact";
import AppContext from "./AppContext";

const App = () => {
	const [user, setUser] = useState({
		username: "VK"
	});

	const [about] = useState({
		title: "Software Engineer"
	});

	const [contact] = useState({
		address: "My address"
	});
	return (
		<AppContext.Provider value={{ user, setUser, about, contact }}>
			<div className="App">
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/contact" component={Contact} />
				</Switch>
			</div>
		</AppContext.Provider>
	);
};

export default App;
