import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pectorals extends Component {
	render() {
		let workoutInfo = this.props.workout.map((pec) => {
			if (pec.muscleGroupOne === 'Pectorals') {
				return <nav>{pec.exercise}</nav>;
			}
		});

		return (
			<div>
				<nav>
					<Link to='/pectorals'>
						<img
							src='https://st2.depositphotos.com/1909187/10981/i/950/depositphotos_109811754-stock-photo-chest-muscles-pectoralis-major-and.jpg'
							alt='human body - chest'
							width='200'
							height='200'
						/>{' '}
					</Link>
					{workoutInfo}
				</nav>
			</div>
		);
	}
}

export default Pectorals;
