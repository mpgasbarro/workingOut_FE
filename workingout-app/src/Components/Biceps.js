import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SingleWorkoutPage from './SingleWorkoutPage';

class Biceps extends Component {
	render() {
		// Mapping through API, for Biceps exercise with a Beginner difficulty
		let workoutInfo = this.props.workout.map((bicep, index) => {
			if (
				bicep.muscleGroupOne === 'Biceps' &&
				bicep.levelOfDifficulty === 'Beginner'
			) {
				return (
					<Link to={`/biceps/${bicep.exercise}`}>
						<li key={index}>
							{bicep.exercise} - {bicep.levelOfDifficulty}{' '}
						</li>
					</Link>
				);
			}
		});
		// Mapping through API, for Biceps exercise with a Intermediate difficulty
		let workoutInfo2 = this.props.workout.map((bicep, index) => {
			if (
				bicep.muscleGroupOne === 'Biceps' &&
				bicep.levelOfDifficulty === 'Intermediate'
			) {
				return (
					<Link to={`/biceps/${bicep.exercise}`}>
						<li key={index}>
							{bicep.exercise} - {bicep.levelOfDifficulty}{' '}
						</li>
					</Link>
				);
			}
		});
		// Mapping through API, for Biceps exercise with an Advanced difficulty
		let workoutInfo3 = this.props.workout.map((bicep, index) => {
			if (
				bicep.muscleGroupOne === 'Biceps' &&
				bicep.levelOfDifficulty === 'Advanced'
			) {
				return (
					<Link to={`/biceps/${bicep.exercise}`}>
						<li key={index}>
							{bicep.exercise} - {bicep.levelOfDifficulty}{' '}
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
					path='/biceps/:workout'
					exact
					render={(routerProp) => {
						return <SingleWorkoutPage match={routerProp.match} />;
					}}
				/>
			</div>
		);
	}
}

export default Biceps;
