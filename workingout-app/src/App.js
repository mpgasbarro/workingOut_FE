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
import Carousel from 'react-bootstrap/Carousel';



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
      .then((data) => this.setState({ games: [...this.state.workouts, data] }));
	};

	render() {
		return (
			<main className='homepage'>
				<Header />
				<section className='bodyPartPics'>
					<Link to='/pectorals'>
						<img
							className='Pecs'
							src='https://st2.depositphotos.com/1909187/10981/i/950/depositphotos_109811754-stock-photo-chest-muscles-pectoralis-major-and.jpg'
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
							src='https://spinalbackrack.com/wp-content/uploads/2019/01/paraspinal-muscles.jpg'
							alt='human body - back'
							width='150'
							height='150'
						/>
					</Link>
				</section>
				<Switch>
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
				</Switch>
				<section>
					<Carousel>
						<Carousel.Item interval={1000}>
							<img
								className='firstSlide'
								src='https://www.designyourway.net/blog/wp-content/uploads/2016/07/Motivational-wallpaper-quotes-6.jpg'
								alt='First slide'
							/>
						</Carousel.Item>
						<Carousel.Item interval={1000}>
							<img
								className='eighthSlide'
								src='https://www.designyourway.net/blog/wp-content/uploads/2016/07/Motivational-wallpaper-quotes-7.jpg'
								alt='Third slide'
							/>
						</Carousel.Item>
						<Carousel.Item interval={1000}>
							<img
								className='thirdSlide'
								src='https://www.designyourway.net/blog/wp-content/uploads/2016/07/Muhammad-Ali-quote.jpg'
								alt='Third slide'
							/>
						</Carousel.Item>
						<Carousel.Item interval={1000}>
							<img
								className='fourthSlide'
								src='https://www.designyourway.net/blog/wp-content/uploads/2012/07/428266-1536x1024.jpg'
								alt='Fourth slide'
							/>
						</Carousel.Item>
						<Carousel.Item interval={1000}>
							<img
								className='fifthSlide'
								src='https://www.designyourway.net/blog/wp-content/uploads/2016/07/Many-of-lifes-failures.jpg'
								alt='Third slide'
							/>
						</Carousel.Item>
						<Carousel.Item interval={1000}>
							<img
								className='sixthSlide'
								src='https://www.designyourway.net/blog/wp-content/uploads/2016/07/DESIGN-IS-DESTINY.jpg'
								alt='Third slide'
							/>
						</Carousel.Item>
						<Carousel.Item interval={1000}>
							<img
								className='seventhSlide'
								src='https://www.designyourway.net/blog/wp-content/uploads/2016/07/Motivational-wallpaper-quotes-18.jpg'
								alt='Third slide'
							/>
						</Carousel.Item>
						<Carousel.Item interval={1000}>
							<img
								className='secondSlide'
								src='https://www.designyourway.net/blog/wp-content/uploads/2012/07/334240.jpg'
								alt='Second slide'
							/>
						</Carousel.Item>
					</Carousel>
				</section>
			</main>
		);
	}
}

export default App;
