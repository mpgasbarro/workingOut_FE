import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Button from 'react-bootstrap/Button';

class Create extends Component {
	constructor() {
		super();
		this.state = {
			exercise: '',
			muscleGroupOne: '',
			muscleGroupTwo: '',
			muscleGroupThree: '',
			levelOfDifficulty: '',
			workout_img: '',
			workout_url: '',
			redirect: false,
		};
	}

	onChange = (event) => {
		this.setState({ [event.target.id]: event.target.value });
	};
	handleSubmit = (event) => {
		console.log('this worked');
		event.preventDefault();
		this.props.createWorkout(this.state);
		this.setState({ redirect: true });
	};
	clearForm = () => {
		this.setState({
			exercise: '',
			muscleGroupOne: '',
			muscleGroupTwo: '',
			muscleGroupThree: '',
			levelOfDifficulty: '',
			workout_img: '',
			workout_url: '',
		});
	};
	render() {
		if (this.state.redirect) {
			return <Redirect to='/'></Redirect>;
		}
		return (
			<div className='create'>
				<form className='createForm'>
					<label type='text' for='exercise'>
						Exercise:
					</label>
					<input
						onChange={this.onChange}
						type='text'
						id='exercise'
						name='exercise'
					/>
					<label type='muscleGroupOne' for='muscleGroupOne'>
						Muscle Group 1:
					</label>
					<input
						onChange={this.onChange}
						type='text'
						id='muscleGroupOne'
						name='muscleGroupOne'
					/>
					<label type='text' for='muscleGroupTwo'>
						Muscle Group Two:
					</label>
					<input
						onChange={this.onChange}
						type='text'
						id='muscleGroupTwo'
						name='muscleGroupTwo'
					/>
					<label type='text' for='muscleGroupThree'>
						Muscle Group Three:
					</label>
					<input
						onChange={this.onChange}
						type='text'
						id='muscleGroupThree'
						name='muscleGroupThree'
					/>
					<label type='text' for='levelOfDifficulty'>
						Level of Difficulty:
					</label>
					<input
						onChange={this.onChange}
						type='text'
						id='levelOfDifficulty'
						name='levelOfDifficulty'
					/>
					<label type='text' for='workout_img'>
						Workout Image:
					</label>
					<input
						onChange={this.onChange}
						type='text'
						id='workout_img'
						name='workout_img'
					/>
					<label type='text' for='workout_url'>
						Workout Video Link:
					</label>
					<input
						onChange={this.onChange}
						type='text'
						id='workout_url'
						name='workout_url'
					/>
					<Button
						onClick={this.handleSubmit}
						className='updateButton'
						variant='outline-success'>
						Submit
					</Button>
				</form>
			</div>
		);
	}
}

export default Create;
