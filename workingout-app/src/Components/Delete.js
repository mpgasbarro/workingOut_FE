import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router';

let workoutUrl = 'https://immense-earth-33685.herokuapp.com/workout/';

class Delete extends Component {
	constructor() {
		super();
		this.state = {
			workouts: {},
			redirect: false,
		};
	}
	deleteGame() {
		fetch(`${workoutUrl}/workout/${this.props.match.params.id}`, {
			method: 'DELETE',
		}).then(() => {
			fetch(`${workoutUrl}workout`)
				.then((res) => res.json())
				.then((res) => {
					this.setState({ workouts: res, redirect: true });
				});
		});
	}

	render() {
		if (this.state.redirect) {
			return <Redirect to='/'></Redirect>;
		}
		return (
			<div>
				<Button
					variant='outline-danger'
					className='btn'
					onClick={(event) => {
						this.deleteGame(event);
					}}>
					Delete
				</Button>
			</div>
		);
	}
}

export default Delete;
