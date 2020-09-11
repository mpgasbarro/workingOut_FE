import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SingleWorkoutPage from './SingleWorkoutPage';
import "./CSS/Back.css"

class Back extends Component {
	render() {
		// Mapping through API, for Back exercise with a Beginner difficulty
		let workoutInfo = this.props.workout.map((back, index) => {
			if (
				back.muscleGroupOne === 'Latissimus Dorsi' &&
				back.levelOfDifficulty === 'Beginner'
			) {
				return (
					<Link to={`/back/${back.exercise}`}>
						<li className='backList' key={index}>
							{back.exercise}
						</li>
					</Link>
				);
			}
		});
		// Mapping through API, for Back exercise with a Intermediate difficulty
		let workoutInfo2 = this.props.workout.map((back, index) => {
			if (
				back.muscleGroupOne === 'Latissimus Dorsi' &&
				back.levelOfDifficulty === 'Intermediate'
			) {
				return (
					<Link to={`/back/${back.exercise}`}>
						<li className='backList' key={index}>
							{back.exercise}
						</li>
					</Link>
				);
			}
		});
		// Mapping through API, for Back exercise with an Advanced difficulty
		let workoutInfo3 = this.props.workout.map((back, index) => {
			if (
				back.muscleGroupOne === 'Latissimus Dorsi' &&
				back.levelOfDifficulty === 'Advanced'
			) {
				return (
					<Link to={`/back/${back.exercise}`}>
						<li className='backList' key={index}>
							{back.exercise}
						</li>
					</Link>
				);
			}
		});

		return (
			<div className='musclegroup'>
				<div className='beginner'> Beginner{workoutInfo} </div>
				<div className='intermediate'> Intermediate{workoutInfo2}</div>
				<div className='advanced'> Advanced {workoutInfo3}</div>

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
