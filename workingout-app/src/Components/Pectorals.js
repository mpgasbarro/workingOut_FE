import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './CSS/Pectorals.css';
import SingleWorkoutPage from './SingleWorkoutPage';
import Home from './Home';

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
			<div className='musclegroup'>
				<div className='muscleLevels'> 
				<div className='beginner'>
					<span className='beg'> Beginner </span>
					{workoutInfo}{' '}
				</div>
				<div className='intermediate'>
					<span className='beg'> Intermediate </span>
					{workoutInfo2}
				</div>
				<div className='advanced'>
					<span className='beg'> Advanced</span> {workoutInfo3}
				</div>
				</div>
				<section>
					<Home />
				</section>
			</div>
		);
	}
}

export default Pectorals;
