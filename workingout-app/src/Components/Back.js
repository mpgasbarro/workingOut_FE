import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SingleWorkoutPage from './SingleWorkoutPage';

class Back extends Component {
	render() {
		// Mapping through API, for Back exercise with a Beginner difficulty
		let workoutInfo = this.props.workout.map((back) => {
			if (
				back.muscleGroupOne === 'Latissimus Dorsi' &&
				back.levelOfDifficulty === 'Beginner'
			) {
				return (
					<Link to={`/back/${back.exercise}`}>
						<li>
							{back.exercise} - {back.levelOfDifficulty}{' '}
						</li>
					</Link>
				);
			}
		});
		// Mapping through API, for Back exercise with a Intermediate difficulty
		let workoutInfo2 = this.props.workout.map((back) => {
			if (
				back.muscleGroupOne === 'Latissimus Dorsi' &&
				back.levelOfDifficulty === 'Intermediate'
			) {
				return (
					<Link to={`/back/${back.exercise}`}>
						<li>
							{back.exercise} - {back.levelOfDifficulty}{' '}
						</li>
					</Link>
				);
			}
		});
		// Mapping through API, for Back exercise with an Advanced difficulty
		let workoutInfo3 = this.props.workout.map((back) => {
			if (
				back.muscleGroupOne === 'Latissimus Dorsi' &&
				back.levelOfDifficulty === 'Advanced'
			) {
				return (
					<Link to={`/back/${back.exercise}`}>
						<li>
							{back.exercise} - {back.levelOfDifficulty}{' '}
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
					path='/back/:workout'
					exact
					render={(routerProp) => {
						return <SingleWorkoutPage match={routerProp.match} />;
					}}
				/>
			</div>
		);
	}
}

export default Back;
