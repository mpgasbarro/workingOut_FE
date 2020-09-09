import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

let workoutTarget = '';

class SingleWorkoutPage extends Component {
	render() {
		console.log(this.props.match.params.workout);
		for (let i = 0; i < this.props.workoutData.length; i++) {
			if (
				this.props.workoutData[i].exercise === this.props.match.params.workout
			) {
				workoutTarget = this.props.workoutData[i];
			}
		}
		return <nav> {workoutTarget.exercise} </nav>;
	}
}

export default SingleWorkoutPage;
