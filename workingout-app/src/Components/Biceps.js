import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SingleWorkoutPage from './SingleWorkoutPage';
import "./CSS/Biceps.css"

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
						<li className='biList' key={index}>
							{bicep.exercise} 
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
						<li className='biList' key={index}>
							{bicep.exercise}
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
						<li className='biList' key={index}>
							{bicep.exercise}
						</li>
					</Link>
				);
			}
		});
		return (
			<div className='musclegroup'>
				<div className='beginner'> Beginner {workoutInfo} </div>
				<div className='intermediate'> Intermediate{workoutInfo2}</div>
				<div className='advanced'> Advanced {workoutInfo3}</div>

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
