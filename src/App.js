import React, { Component } from "react";

import Stopwatch from "./Stopwatch";
import Countdown from "./Countdown";
import Age from "./Age";

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-title"> Timer Demo</div>
				<div className="Timers">
					<Stopwatch />
					<Countdown />
				</div>
				<div className= "DOB">
				<Age />
				</div>
			</div>
		);
	}
}

export default App;
