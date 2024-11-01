import React from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogTile from "./HogTile";

function App() {
	return (
		<div className="App">
			<Nav />
			<div className="navWrapper">
				<h1 className="headerText largeHeader">Welcome to the Pigpen!</h1>
			</div>
			<div className="hog-container indexWrapper">
				{hogs.map((hog) => (
					<HogTile key={hog.name} name={hog.name} image={hog.image} />
				))}
			</div>
		</div>
	);
}

export default App;
