import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Youtube from 'react-youtube';

let workoutTarget = '';
let videoID = '';

class SingleWorkoutPage extends Component {
	_onReady = (event) => {
		event.target.pauseVideo();
	};
	render() {
		const opts = {
			height: '740',
			width: '940',
		};
		// Looping through the data, to make sure correct exercise is dynamically updated and matches with what was selected
		for (let i = 0; i < this.props.workoutData.length; i++) {
			if (
				this.props.workoutData[i].exercise === this.props.match.params.workout
			) {
				workoutTarget = this.props.workoutData[i];
			}
		}
		//videoID equates to the id needed on the react Youtube
		videoID = workoutTarget.workout_url.split('?v=')[1];
		return (
			<nav>
				<Youtube opts={opts} onReady={this._onReady} videoId={videoID} />
				{workoutTarget.exercise}
				{workoutTarget.muscleGroupOne}
				<img
					src={workoutTarget.workout_img}
					alt={workoutTarget.description}
					width='500'
					height='500'
				/>
			</nav>
		);
	}
}

export default SingleWorkoutPage;
