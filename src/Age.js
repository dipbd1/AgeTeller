import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "./Age.css";

import "react-datepicker/dist/react-datepicker.css";

class Age extends Component {
	state = {
		startDate: new Date(),
		currentTime: new Date(),
		counter: true,
	};

	handleChange = (date) => {
		clearInterval(this.timer);
		this.setState({
			startDate: date,
			currentTime: new Date(),
			counter: false,
			timer: setInterval(() => {
				this.setState({
					currentTime: new Date(),
				});
			}, 10),
		});
	};

	render() {
		var dateWithzero = this.state.startDate.setHours(0, 0, 0);
		var time = this.state.currentTime - dateWithzero;
		var minDate = new Date("1930-01-01");

		const msToTime = (s) => {
			if (this.state.counter === true) {
				return "0:0:0:0:0";
			}
			var ms = s % 1000;
			s = (s - ms) / 1000; //seconds
			var secs = s % 60;
			s = (s - secs) / 60; //minutes
			var mins = s % 60;
			s = (s - mins) / 60; // hours
			console.log(s);
			var hrs = s % 24;
			s = (s - hrs) / 24; //days
			var day = s % 365;
			s = (s - day) / 365; // years
			var years = Math.floor(s);

			if (years === 0) {
				return (
					"Your Age is " +
					day +
					"days, " +
					hrs +
					"hours, " +
					mins +
					"mins, " +
					secs +
					"seconds"
				); //+ "." + ms
			}

			return (
				"Your Age is " +
				years +
				" years, " +
				day +
				"days, " +
				hrs +
				"hours, " +
				mins +
				"mins, " +
				secs +
				"seconds"
			); //+ "." + ms
		};

		var timeToHour = msToTime(time);

		return (
			<div className="Age">
				<h1>Your Age</h1>
				<DatePicker
					selected={this.state.startDate}
					onChange={this.handleChange}
					showYearDropdown
					showMonthDropdown
					scrollableYearDropdown
					dropdownMode="select"
					minDate={minDate}
					maxDate={this.state.currentTime}
				/>
				<h1> {timeToHour.toString()}</h1>
			</div>
		);
	}
}

export default Age;
