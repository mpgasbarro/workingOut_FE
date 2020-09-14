import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SingleWorkoutPage from './SingleWorkoutPage';
import './CSS/Core.css';
import Home from './Home';

class Core extends Component {
	render() {
		// Mapping through API, for Core exercise with a Beginner difficulty
		let workoutInfo = this.props.workout.map((core, index) => {
			if (
				core.muscleGroupOne === ('Abdominals' || 'Obliques') &&
				core.levelOfDifficulty === 'Beginner'
			) {
				return (
					<Link to={`/core/${core.exercise}`}>
						<li className='coreList' key={index}>
							{core.exercise}
						</li>
					</Link>
				);
			}
		});
		// Mapping through API, for Core exercise with a Intermediate difficulty
		let workoutInfo2 = this.props.workout.map((core, index) => {
			if (
				core.muscleGroupOne === ('Abdominals' || 'Obliques') &&
				core.levelOfDifficulty === 'Intermediate'
			) {
				return (
					<Link to={`/core/${core.exercise}`}>
						<li className='coreList' key={index}>
							{core.exercise}
						</li>
					</Link>
				);
			}
		});
		// Mapping through API, for Core exercise with an Advanced difficulty
		let workoutInfo3 = this.props.workout.map((core, index) => {
			if (
				core.muscleGroupOne === ('Abdominals' || 'Obliques') &&
				core.levelOfDifficulty === 'Advanced'
			) {
				return (
					<Link to={`/core/${core.exercise}`}>
						<li className='coreList' key={index}>
							{core.exercise}
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
						<span className='beg'> Beginner </span>
						{workoutInfo}{' '}
					</div>
					<div className='intermediate'>
						{' '}
						<span className='beg'> Intermediate</span>
						{workoutInfo2}
					</div>
					<div className='advanced'>
						{' '}
						<span className='beg'> Advanced </span> {workoutInfo3}
					</div>
				</div>
				<section>
					<Home />
				</section>
			</div>
		);
	}
}

export default Core;
