import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './CSS/Pectorals.css'
import SingleWorkoutPage from './SingleWorkoutPage'

class Pectorals extends Component {
	render() {
		let workoutInfo = this.props.workout.map((pec) => {
			if (pec.muscleGroupOne === 'Pectorals') {
                    if (pec.levelOfDifficulty === "Beginner") 
                    return (
                    <Link to={`/pectorals/${pec.exercise}`}>
                    <li>{pec.exercise} - {pec.levelOfDifficulty} </li>
                    </Link>
                    );
                }
        });
        let workoutInfo2 = this.props.workout.map((pec) => {
					if (pec.muscleGroupOne === 'Pectorals') {
						if (pec.levelOfDifficulty === 'Intermediate')
							return <li>{pec.exercise} - {pec.levelOfDifficulty} </li>;
					}
                });
        let workoutInfo3 = this.props.workout.map((pec) => {
					if (pec.muscleGroupOne === 'Pectorals') {
						if (pec.levelOfDifficulty === 'Advanced')
							return <li>{pec.exercise} - {pec.levelOfDifficulty} </li>;
					}
				});

		return (
			<div>
					<div className='beginner'>{workoutInfo} </div>
					<div className='intermediate'>{workoutInfo2}</div>
					<div className='advanced'>{workoutInfo3}</div>
				
				<Route
					path='/pectorals/:workout'
					exact
					render={(routerProp) => {
                        return <SingleWorkoutPage 
                        match={routerProp.match} />;
					}}
				/>
			</div>
		);
	}
}

export default Pectorals;
