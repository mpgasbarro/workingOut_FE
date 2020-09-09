import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Pectorals from './Components/Pectorals';
import SingleWorkoutPage from './Components/SingleWorkoutPage'


let workoutUrl =
	'https://immense-earth-33685.herokuapp.com/workout/?format=json';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			  workouts: [],
		};
	}

	componentDidMount() {
		fetch(`${workoutUrl}`)
			.then((res) => res.json())
			.then((json) => {
				this.setState({ workouts: json });
			})
			.catch((err) => {
				console.error(err);
			});
	}
	render() {
		return (
			<div>
				<nav>
					<Header />
				</nav>
				<Link to='/pectorals'>
					<img
						src='https://st2.depositphotos.com/1909187/10981/i/950/depositphotos_109811754-stock-photo-chest-muscles-pectoralis-major-and.jpg'
						alt='human body - chest'
						width='150'
						height='150'
					/>
				</Link>
				<main>
					<Route
						exact
						path='/pectorals'
						render={() => {
							return <Pectorals workout={this.state.workouts} />;
						}}
					/>
					<Route
						exact
						path='/pectorals/:workout'
						render={(routerProp) => {
							return (
								<SingleWorkoutPage
									match={routerProp.match}
									workoutData={this.state.workouts}
								/>
							);
						}}
					/>
				</main>
			</div>
		);
	}
}

export default App;
