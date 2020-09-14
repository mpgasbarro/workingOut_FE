import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SingleWorkoutPage from './SingleWorkoutPage';
import "./CSS/Biceps.css"
import Home from './Home';

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
				<div className='muscleLevels'> 
				<div className='beginner'>
					{' '}
					<span className='beg'> Beginner </span><span className="yes"> {workoutInfo} </span>{' '}
				</div>
				<div className='intermediate'>
					{' '}
					<span className='beg'> Intermediate </span>
					{workoutInfo2}
				</div>
				<div className='advanced'>
					{' '}
					<span className='beg'> Advanced </span>
					{workoutInfo3}
				</div>
				</div>
				<section>
					<Home />
				</section>
				
			</div>
		);
	}
}

export default Biceps;
