import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SingleWorkoutPage from './SingleWorkoutPage';

class Core extends Component {
	render() {
		// Mapping through API, for Core exercise with a Beginner difficulty
		let workoutInfo = this.props.workout.map((core) => {
			if (
				core.muscleGroupOne === ('Abdominals' || "Obliques")  &&
				core.levelOfDifficulty === 'Beginner'
			) {
				return (
					<Link to={`/core/${core.exercise}`}>
						<li>
							{core.exercise} - {core.levelOfDifficulty}{' '}
						</li>
					</Link>
				);
			}
		});
		// Mapping through API, for Core exercise with a Intermediate difficulty
		let workoutInfo2 = this.props.workout.map((core) => {
			if (
				core.muscleGroupOne === ('Abdominals' || "Obliques") &&
				core.levelOfDifficulty === 'Intermediate'
			) {
				return (
					<Link to={`/core/${core.exercise}`}>
						<li>
							{core.exercise} - {core.levelOfDifficulty}{' '}
						</li>
					</Link>
				);
			}
		});
		// Mapping through API, for Core exercise with an Advanced difficulty
		let workoutInfo3 = this.props.workout.map((core) => {
			if (
				core.muscleGroupOne === ('Abdominals' || "Obliques") &&
				core.levelOfDifficulty === 'Advanced'
			) {
				return (
					<Link to={`/core/${core.exercise}`}>
						<li>
							{core.exercise} - {core.levelOfDifficulty}{' '}
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
					path='/core/:workout'
					exact
					render={(routerProp) => {
						return <SingleWorkoutPage match={routerProp.match} />;
					}}
				/>
			</div>
		);
	}
}

export default Core;
