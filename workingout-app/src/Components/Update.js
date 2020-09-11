import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
		if (this.state.redirect) {
			return <Redirect to='/'></Redirect>;
		}
		return (
			<div className='update'>
				<Form.Group className='updateForm'>
					<label type='text' for='exercise'>
						Exercise:
					</label>
					<Form.Control
						onChange={this.onChange}
						type='text'
						id='exercise'
						name='exercise'
					/>
					<label type='text' for='muscleGroupOne'>
						Main Muscle Group:
					</label>
					<Form.Control
						onChange={this.onChange}
						type='text'
						id='muscleGroupOne'
						name='muscleGroupOne'
					/>
					<label type='text' for='muscleGroupTwo'>
						Secondary Muscle Group:
					</label>
					<Form.Control
						onChange={this.onChange}
						type='text'
						id='muscleGroupTwo'
						name='muscleGroupTwo'
					/>
					<label type='text' for='muscleGroupThree '>
						Tertiary Muscle Group :
					</label>
					<Form.Control
						onChange={this.onChange}
						type='text'
						id='muscleGroupThree '
						name='muscleGroupThree '
					/>
					<label type='text' for='levelOfDifficulty'>
						Level Of Difficulty:
					</label>
					<Form.Control
						onChange={this.onChange}
						type='text'
						id='levelOfDifficulty'
						name='levelOfDifficulty'
					/>
					<label type='text' for='workout_img'>
						Workout Image:
					</label>
					<Form.Control
						onChange={this.onChange}
						type='text'
						id='workout_img'
						name='workout_img'
					/>
					<label type='text' for='workout_url'>
						Workout Video Url:
					</label>
					<Form.Control
						onChange={this.onChange}
						type='text'
						id='workout_url'
						name='workout_url'
					/>
					<label type='text' for='description'>
						Workout Description:
					</label>
					<Form.Control
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
				</Form.Group>
			</div>
		);
	}
}

export default Update;
