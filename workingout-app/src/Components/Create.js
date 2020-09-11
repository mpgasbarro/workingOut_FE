import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Button from 'react-bootstrap/Button';
import './CSS/Create.css';

class Create extends Component {
	constructor() {
		super();
		this.state = {
			exercise: '',
			muscleGroupOne: 'Triceps',
			muscleGroupTwo: 'Triceps',
			muscleGroupThree: 'Triceps',
			levelOfDifficulty: 'Beginner',
			workout_img: '',
			workout_url: '',
			description: '',
			redirect: false,
		};
	}

	onChange = (event) => {
		this.setState({ [event.target.id]: event.target.value });
		console.log('this also worked');
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
			muscleGroupOne: 'Triceps',
			muscleGroupTwo: 'Triceps',
			muscleGroupThree: 'Triceps',
			levelOfDifficulty: 'Beginner',
			workout_img: '',
			workout_url: '',
			description: '',
		});
	};
	render() {
		if (this.state.redirect) {
			return <Redirect to='/'></Redirect>;
		}
		return (
			<div className='create'>
				<form className='createForm'>
					<label type='text' htmlFor='exercise'>
						Exercise:
					</label>
					<input
						onChange={this.onChange}
						type='text'
						id='exercise'
						name='exercise'
					/>
					<label type='muscleGroupOne' htmlFor='muscleGroupOne'>
						Main Muscle Group:
					</label>
					<select
						onChange={this.onChange}
						id='muscleGroupOne'
						name='muscleGroupOne'>
						<option value='Triceps'> Triceps </option>
						<option value='Pectorals'> Pectorals </option>
						<option value='Deltoids'> Deltoids </option>
						<option value='Biceps'> Biceps </option>
						<option value='Back'> Latissimus Dorsi </option>
						<option value='Abdominals'> Abdominals </option>
					</select>
					<label type='text' htmlFor='muscleGroupTwo'>
						Secondary Muscle Group:
					</label>
					<select
						onChange={this.onChange}
						id='muscleGroupTwo'
						name='muscleGroupTwo'>
						<option value='Triceps'> Triceps </option>
						<option value='Pectorals'> Pectorals </option>
						<option value='Deltoids'> Deltoids </option>
						<option value='Biceps'> Biceps </option>
						<option value='Back'> Latissimus Dorsi </option>
						<option value='Abdominals'> Abdominals </option>
					</select>
					<label type='text' htmlFor='muscleGroupThree'>
						Tertiary Muscle Group:
					</label>
					<select
						onChange={this.onChange}
						id='muscleGroupThree'
						name='muscleGroupThree'>
						<option value='Triceps'> Triceps </option>
						<option value='Pectorals'> Pectorals </option>
						<option value='Deltoids'> Deltoids </option>
						<option value='Biceps'> Biceps </option>
						<option value='Back'> Latissimus Dorsi </option>
						<option value='Abdominals'> Abdominals </option>
					</select>
					<label type='text' htmlFor='levelOfDifficulty'>
						Level of Difficulty:
					</label>
					<select
						onChange={this.onChange}
						id='levelOfDifficulty'
						name='levelOfDifficulty'>
						<option value='Beginner'> Beginner </option>
						<option value='Intermediate'> Intermediate </option>
						<option value='Advanced'> Advanced </option>
					</select>
					<label type='text' htmlFor='workout_img'>
						Workout Image:
					</label>
					<input
						onChange={this.onChange}
						type='text'
						id='workout_img'
						name='workout_img'
					/>
					<label type='text' htmlFor='workout_url'>
						Workout Video Link:
					</label>
					<input
						onChange={this.onChange}
						type='text'
						id='workout_url'
						name='workout_url'
					/>
					<label type='text' htmlFor='description'>
						Description:
					</label>
					<input
						onChange={this.onChange}
						type='text'
						id='description'
						name='description'
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
