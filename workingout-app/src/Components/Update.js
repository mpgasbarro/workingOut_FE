import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Button from 'react-bootstrap/Button';
import "./CSS/Update.css"

class Update extends Component {
	constructor() {
		super();
		this.state = {
			id: '',
			redirect: false,
		};
	}
	componentDidMount() {
		this.setState({ id: this.props.match.params.id });
	}

	onChange = (event) => {
		this.setState({ [event.target.id]: event.target.value });
	};
	handleSubmit = (event) => {
		event.preventDefault();
		this.props.updateWorkout(this.state);
		this.clearForm(event);
		this.setState({ redirect: true });
	};
	clearForm = () => {
		this.setState({ id: '' });
	};
	render() {
		console.log(this.props.match.params);
		if (this.state.redirect) {
			return <Redirect to='/'></Redirect>;
		}
		return (
			<div className='update'>
				<form className='updateForm'>
					<label type='text' htmlFor='exercise'>
						Exercise:
					</label>
					<input
						onChange={this.onChange}
						type='text'
						id='exercise'
						name='exercise'
					/>
					<label type='text' htmlFor='muscleGroupOne'>
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
						id='muscleGroupOne'
						name='muscleGroupOne'>
						<option value='Triceps'> Triceps </option>
						<option value='Pectorals'> Pectorals </option>
						<option value='Deltoids'> Deltoids </option>
						<option value='Biceps'> Biceps </option>
						<option value='Back'> Latissimus Dorsi </option>
						<option value='Abdominals'> Abdominals </option>
					</select>
					<label type='text' htmlFor='muscleGroupThree '>
						Tertiary Muscle Group :
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
					<label type='text' htmlFor='levelOfDifficulty'>
						Level Of Difficulty:
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
						Workout Video Url:
					</label>
					<input
						onChange={this.onChange}
						type='text'
						id='workout_url'
						name='workout_url'
					/>
					<label type='text' htmlFor='description'>
						Workout Description:
					</label>
					<input
						onChange={this.onChange}
						type='text'
						id='description'
						name='description'
					/>
					<Button
						onClick={this.handleSubmit}
						className='createButton'
						variant='outline-success'>
						Submit
					</Button>
				</form>
			</div>
		);
	}
}

export default Update;
