import React, { Component } from 'react';
import Youtube from 'react-youtube';
import './CSS/SingleWorkoutPage.css';

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
		videoID =
			workoutTarget.workout_url && workoutTarget.workout_url.split('?v=')[1];
		return (
			<div>
				<span className='exerciseName'>{workoutTarget.exercise} </span>
				<div className='workoutDetails'>
					<Youtube
						className='youtube'
						opts={opts}
						onReady={this._onReady}
						videoId={videoID}
					/>
					<img
						className='workoutPic'
						src={workoutTarget.workout_img}
						alt={workoutTarget.description}
						width='500'
						height='500'
					/>
				</div>
				<p className="workoutDes">{workoutTarget.description}</p>
				<div className='musclesUsed'>
					<li className='primaryMuslce'>
						<em>
							<b>Primary Muscle Group:</b>
						</em>{' '}
						{workoutTarget.muscleGroupOne}
					</li>
					<li className='secondaryMuscle'>
						<em>
							<b>Secondary Muscle Group: </b>
						</em>
						{workoutTarget.muscleGroupTwo}
					</li>
				</div>
			</div>
		);
	}
}

export default SingleWorkoutPage;
