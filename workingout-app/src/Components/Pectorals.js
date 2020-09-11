import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './CSS/Pectorals.css';
import SingleWorkoutPage from './SingleWorkoutPage';

class Pectorals extends Component {
	render() {
		// Mapping through API, for Pectoral exercise with a Beginner difficulty
		
		let workoutInfo = this.props.workout.map((pec, index) => {
			if (
				pec.muscleGroupOne === 'Pectorals' &&
				pec.levelOfDifficulty === 'Beginner'
			) {
				return (
					<Link to={`/pectorals/${pec.exercise}`}>
						<li className="pecList" key={index}>
							{pec.exercise}
						</li>
					</Link>
				);
			}
		});
		// Mapping through API, for Pectoral exercise with a Intermediate difficulty
		let workoutInfo2 = this.props.workout.map((pec, index) => {
			if (
				pec.muscleGroupOne === 'Pectorals' &&
				pec.levelOfDifficulty === 'Intermediate'
			) {
				return (
					<Link to={`/pectorals/${pec.exercise}`}>
						<li className='pecList' key={index}>
							{pec.exercise}
						</li>
					</Link>
				);
			}
		});
		// Mapping through API, for Pectoral exercise with an Advanced difficulty
		let workoutInfo3 = this.props.workout.map((pec, index) => {
			if (
				pec.muscleGroupOne === 'Pectorals' &&
				pec.levelOfDifficulty === 'Advanced'
			) {
				return (
					<Link to={`/pectorals/${pec.exercise}`}>
						<li className='pecList' key={index}>
							{pec.exercise}
						</li>
					</Link>
				);
			}
		});

		return (
			<div className="musclegroup">
				
				<div className='beginner'>Beginner {workoutInfo} </div>
				<div className='intermediate'>Intermediate{workoutInfo2}</div>
				<div className='advanced'>Advanced{workoutInfo3}</div>

				<Route
					path='/pectorals/:workout'
					exact
					render={(routerProp) => {
						return <SingleWorkoutPage match={routerProp.match} />;
					}}
				/>
			</div>
		);
	}
}

export default Pectorals;
