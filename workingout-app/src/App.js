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
							src={
								'https://o.remove.bg/downloads/e79e15d7-5a2d-491b-98b1-f9d723f038f3/unnamed-removebg-preview.png'
							}
							alt='human body - chest'
							width='150'
							height='150'
						/>
					</Link>
					<Link to='/triceps'>
						<img
							className='Tri'
							src='https://www.peakptfitness.com/wp-content/uploads/2017/04/Fotolia_110740617_S-300x300.jpg'
							alt='human body - Triceps'
							width='150'
							height='150'
						/>
					</Link>
					<Link to='/deltoids'>
						<img
							className='Delt'
							src='https://oldschoollabs.com/wp-content/uploads/2019/07/Deltoid-Muscle-Breakdown.jpg'
							alt='human body - Deltoids'
							width='150'
							height='150'
						/>
					</Link>
					<Link to='/biceps'>
						<img
							className='Bi'
							src='https://iaom-us.com/wp-content/uploads/2018/11/Fotolia_110740333_S-693x675.jpg'
							alt='human body - biceps'
							width='150'
							height='150'
						/>
					</Link>
					<Link to='/core'>
						<img
							className='core'
							src='https://image.jimcdn.com/app/cms/image/transf/dimension=185x10000:format=jpg/path/sb706e6011cc48302/image/if120ec98e7652429/version/1541689214/abs-abdominals-muscle-group-exercises.jpg'
							alt='human body - core'
							width='150'
							height='150'
						/>
					</Link>
					<Link to='/back'>
						<img
							className='back'
							src='https://o.remove.bg/downloads/7174090e-eb6c-4e87-8268-123f74802658/paraspinal-muscles-removebg-preview.png'
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
