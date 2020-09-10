import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SingleWorkoutPage from './SingleWorkoutPage';

class Deltoids extends Component {
	render() {
		// Mapping through API, for Deltoids exercise with a Beginner difficulty
		let workoutInfo = this.props.workout.map((del, index) => {
			if (
				del.muscleGroupOne === 'Deltoids' &&
				del.levelOfDifficulty === 'Beginner'
			) {
				return (
					<Link to={`/deltoids/${del.exercise}`}>
						<li key={index}>
							{del.exercise} - {del.levelOfDifficulty}{' '}
						</li>
					</Link>
				);
			}
		});
		// Mapping through API, for Deltoids exercise with a Intermediate difficulty
		let workoutInfo2 = this.props.workout.map((del, index) => {
			if (
				del.muscleGroupOne === 'Deltoids' &&
				del.levelOfDifficulty === 'Intermediate'
			) {
				return (
					<Link to={`/deltoids/${del.exercise}`}>
						<li key={index}>
							{del.exercise} - {del.levelOfDifficulty}{' '}
						</li>
					</Link>
				);
			}
		});
		// Mapping through API, for Deltoids exercise with an Advanced difficulty
		let workoutInfo3 = this.props.workout.map((del, index) => {
			if (
				del.muscleGroupOne === 'Deltoids' &&
				del.levelOfDifficulty === 'Advanced'
			) {
				return (
					<Link to={`/deltoids/${del.exercise}`}>
						<li key={index}>
							{del.exercise} - {del.levelOfDifficulty}{' '}
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
					path='/deltoids/:workout'
					exact
					render={(routerProp) => {
						return <SingleWorkoutPage match={routerProp.match} />;
					}}
				/>
			</div>
		);
	}
}

export default Deltoids;
