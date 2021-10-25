import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const TrafficLight = () => {
	const [clicked, setClicked] = useState(null);
	let redSelected = "";
	let orangeSelected = "";
	let greenSelected = "";

	if (clicked == "red") {
		redSelected = "redSelected";
	} else if (clicked == "orange") {
		orangeSelected = "orangeSelected";
	} else if (clicked == "green") {
		greenSelected = "greenSelected";
	}

	return (
		<div className="container">
			<div className="trafficTop"></div>
			<div className="box">
				<div
					onClick={() => setClicked("red")}
					className={"circle red " + redSelected}></div>
				<div
					onClick={() => setClicked("orange")}
					className={"circle orange " + orangeSelected}></div>
				<div
					onClick={() => setClicked("green")}
					className={"circle green " + greenSelected}></div>
			</div>
		</div>
	);
};

export default TrafficLight;
