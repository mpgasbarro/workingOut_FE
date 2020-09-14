import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './Components/CSS/App.css';
import Header from './Components/Header';
import SingleWorkoutPage from './Components/SingleWorkoutPage';
import Pectorals from './Components/Pectorals';
import Triceps from './Components/Triceps';
import Deltoids from './Components/Deltoids';
import Biceps from './Components/Biceps';
import Core from './Components/Core';
import Back from './Components/Back';
import Create from './Components/Create';
import Update from './Components/Update';
import Home from "./Components/Home";
import TriPic from './BodyPics/Fotolia_110740617_S-300x300-removebg-preview.png';
import DeltPic from './BodyPics/Deltoid-Muscle-Breakdown-removebg-preview.png';
import BiPic from './BodyPics/Fotolia_110740333_S-693x675-removebg-preview.png';
import CorePic from './BodyPics/abs-abdominals-muscle-group-exercises-removebg-preview.png';
import BackPic from './BodyPics/9959c5efe300f6a073bee02225612ca5-removebg-preview.png';
import PecPic from './BodyPics/357299_5cd3e9b65db095cd3e9b65db41-removebg-preview.png';




let workoutUrl =
	'https://immense-earth-33685.herokuapp.com/workout/';
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

	createWorkout = (workout) => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(workout),
		};
		fetch(`${workoutUrl}`, requestOptions)
			.then((res) => res.json())
			.then((data) =>
				this.setState({ workouts: [...this.state.workouts, data] })
			);
	};
	updateWorkout = (workout) => {
		const requestOptions = {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(workout),
		};
      
		fetch(`${workoutUrl}${workout.id}`, requestOptions)
      .then((res) => res.json())
			//add logic to select specific game
      .then((data) => this.setState({ workouts: [...this.state.workouts, data] }));
	};

	render() {
		return (
			<main className='homepage'>
				<Header />
      
				<section className='bodyPartPics'>
					<Link to='/pectorals'>
						<img
							className='Pecs'
							src={PecPic}
							alt='human body - chest'
							width='150'
							height='150'
						/>
					</Link>
					<Link to='/triceps'>
						<img
							className='Tri'
							src={TriPic}
							alt='human body - Triceps'
							width='150'
							height='150'
						/>
					</Link>
					<Link to='/deltoids'>
						<img
							className='Delt'
							src={DeltPic}
							alt='human body - Deltoids'
							width='150'
							height='150'
						/>
					</Link>
					<Link to='/biceps'>
						<img
							className='Bi'
							src={BiPic}
							alt='human body - biceps'
							width='150'
							height='150'
						/>
					</Link>
					<Link to='/core'>
						<img
							className='core'
							src={CorePic}
							alt='human body - core'
							width='150'
							height='150'
						/>
					</Link>
					<Link to='/back'>
						<img
							className='back'
							src={BackPic}
							alt='human body - back'
							width='150'
							height='150'
						/>
					</Link>
				</section>
				<Switch>
          <Route 
          path="/"
          component={Home}
          exact
          />
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
					<Route
						exact
						path='/core'
						render={() => {
							return <Core workout={this.state.workouts} />;
						}}
					/>
					<Route
						exact
						path='/core/:workout'
						render={(routerProp) => {
							return (
								<SingleWorkoutPage
									match={routerProp.match}
									workoutData={this.state.workouts}
								/>
							);
						}}
					/>
					<Route
						exact
						path='/back'
						render={() => {
							return <Back workout={this.state.workouts} />;
						}}
					/>
					<Route
						exact
						path='/back/:workout'
						render={(routerProp) => {
							return (
								<SingleWorkoutPage
									match={routerProp.match}
									workoutData={this.state.workouts}
								/>
							);
						}}
					/>
					<Route
						exact
						path='/create'
						render={(routerProp) => {
							return (
								<Create
									newWorkout={this.state.newWorkout}
									match={routerProp.match}
									createWorkout={this.createWorkout}
								/>
							);
						}}
					/>
					<Route
						exact
						path='/update/:id'
						render={(routerProp) => {
							return (
								<Update
									match={routerProp.match}
									updateWorkout={this.updateWorkout}
									workout={this.state.workouts}
								/>
							);
						}}
					/>
					<Route
						path='/back/:workout'
						exact
						render={(routerProp) => {
							return <SingleWorkoutPage match={routerProp.match} />;
						}}
					/>
					<Route
						path='/biceps/:workout'
						exact
						render={(routerProp) => {
							return <SingleWorkoutPage match={routerProp.match} />;
						}}
					/>
					<Route
						path='/core/:workout'
						exact
						render={(routerProp) => {
							return <SingleWorkoutPage match={routerProp.match} />;
						}}
					/>
					<Route
						path='/deltoids/:workout'
						exact
						render={(routerProp) => {
							return <SingleWorkoutPage match={routerProp.match} />;
						}}
					/>
	
					<Route
						path='/triceps/:workout'
						exact
						render={(routerProp) => {
							return <SingleWorkoutPage match={routerProp.match} />;
						}}
					/>
					<Route
						path='/pectorals/:workout'
						exact
						render={(routerProp) => {
							return <SingleWorkoutPage match={routerProp.match} />;
						}}
					/>
				</Switch>
			
			</main>
		);
	}
}

export default App;
