import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import SingleWorkoutPage from './Components/SingleWorkoutPage';
import Pectorals from './Components/Pectorals';
import Triceps from './Components/Triceps';
import Deltoids from './Components/Deltoids';
import Biceps from './Components/Biceps';

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
        <nav>  
				<Link to='/pectorals'>
					<img
						src='https://st2.depositphotos.com/1909187/10981/i/950/depositphotos_109811754-stock-photo-chest-muscles-pectoralis-major-and.jpg'
						alt='human body - chest'
						width='150'
						height='150'
					/>
				  </Link>
        </nav>
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
          <nav> 
				<Link to='/triceps'>
						<img
							src='https://www.peakptfitness.com/wp-content/uploads/2017/04/Fotolia_110740617_S-300x300.jpg'
							alt='human body - Triceps'
							width='150'
							height='150'
						/>
				</Link>
          </nav>
					<main>
				<Route
							exact
							path='/triceps'
							render={() => {
								return <Triceps workout={this.state.workouts} />;
							}}
						/>
				<Route
							exact
							path='/triceps/:workout'
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
          <nav> 
				<Link to='/deltoids'>
							<img
								src='https://oldschoollabs.com/wp-content/uploads/2019/07/Deltoid-Muscle-Breakdown.jpg'
								alt='human body - Deltoids'
								width='150'
								height='150'
							/>
				</Link>
          </nav>
        <main> 
				<Route
							exact
							path='/deltoids'
							render={() => {
								return <Deltoids workout={this.state.workouts} />;
							}}
						/>
				<Route
							exact
							path='/deltoids/:workout'
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
        <nav>  
				<Link to='/biceps'>
							<img
								src='https://iaom-us.com/wp-content/uploads/2018/11/Fotolia_110740333_S-693x675.jpg'
								alt='human body - biceps'
								width='150'
								height='150'
							/>
				</Link>
        </nav> 
        <main> 
				<Route
							exact
							path='/biceps'
							render={() => {
								return <Biceps workout={this.state.workouts} />;
							}}
						/>
				<Route
							exact
							path='/biceps/:workout'
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
