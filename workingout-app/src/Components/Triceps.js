import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SingleWorkoutPage from './SingleWorkoutPage';
import './CSS/Triceps.css'

class Triceps extends Component {
	render() {
		// Mapping through API, for Triceps exercise with a Beginner difficulty
		let workoutInfo = this.props.workout.map((tri, index) => {
			if (
				tri.muscleGroupOne === 'Triceps' &&
				tri.levelOfDifficulty === 'Beginner'
			) {
				return (
					<Link to={`/triceps/${tri.exercise}`}>
						<li className='triList' key={index}>
							{tri.exercise} 
						</li>
					</Link>
				);
			}
		});
		// Mapping through API, for Triceps exercise with a Intermediate difficulty
		let workoutInfo2 = this.props.workout.map((tri, index) => {
			if (
				tri.muscleGroupOne === 'Triceps' &&
				tri.levelOfDifficulty === 'Intermediate'
			) {
				return (
					<Link to={`/triceps/${tri.exercise}`}>
						<li className='triList' key={index}>
							{tri.exercise} 
						</li>
					</Link>
				);
			}
		});
		// Mapping through API, for Triceps exercise with an Advanced difficulty
		let workoutInfo3 = this.props.workout.map((tri, index) => {
			if (
				tri.muscleGroupOne === 'Triceps' &&
				tri.levelOfDifficulty === 'Advanced'
			) {
				return (
					<Link to={`/tricpes/${tri.exercise}`}>
						<li className='triList' key={index}>
							{tri.exercise}
						</li>
					</Link>
				);
			}
		});

		return (
			<div className='musclegroup'>
				<div className='beginner'>
					{' '}
					<span className='beg'> Beginner </span>
					{workoutInfo}{' '}
				</div>
				<div className='intermediate'>
					{' '}
					<span className='beg'> Intermediate </span>
					{workoutInfo2}
				</div>
				<div className='advanced'>
					{' '}
					<span className='beg'> Advanced </span> {workoutInfo3}
				</div>

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