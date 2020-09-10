import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SingleWorkoutPage from './SingleWorkoutPage';


class Triceps extends Component {
	render() {
		// Mapping through API, for Pectoral exercise with a Beginner difficulty
		let workoutInfo = this.props.workout.map((tri) => {
			if (
				tri.muscleGroupOne === 'Triceps' &&
				tri.levelOfDifficulty === 'Beginner'
			) {
				return (
					<Link to={`/triceps/${tri.exercise}`}>
						<li>
							{tri.exercise} - {tri.levelOfDifficulty}{' '}
						</li>
					</Link>
				);
			}
		});
		// Mapping through API, for Pectoral exercise with a Intermediate difficulty
		let workoutInfo2 = this.props.workout.map((tri) => {
			if (
				tri.muscleGroupOne === 'Triceps' &&
				tri.levelOfDifficulty === 'Intermediate'
			) {
				return (
					<Link to={`/triceps/${tri.exercise}`}>
						<li>
							{tri.exercise} - {tri.levelOfDifficulty}{' '}
						</li>
					</Link>
				);
			}
		});
		// Mapping through API, for Pectoral exercise with an Advanced difficulty
		let workoutInfo3 = this.props.workout.map((tri) => {
			if (
				tri.muscleGroupOne === 'Triceps' &&
				tri.levelOfDifficulty === 'Advanced'
			) {
				return (
					<Link to={`/tricpes/${tri.exercise}`}>
						<li>
							{tri.exercise} - {tri.levelOfDifficulty}{' '}
						</li>
					</Link>
				);
			}
		});

		return (
			<div>
				<div className='beginner'>{workoutInfo} </div>
				<div className='intermediate'>{workoutInfo2}</div>
				<div className='advanced'>{workoutInfo3}</div>

				<Route
					path='/triceps/:workout'
					exact
					render={(routerProp) => {
						return <SingleWorkoutPage match={routerProp.match} />;
					}}
				/>
			</div>
		);
	}
}

export default Triceps;