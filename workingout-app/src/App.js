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
							src='https://o.remove.bg/downloads/5f2a7b34-4743-4669-9222-085089033f82/depositphotos_109811754-stock-photo-chest-muscles-pectoralis-major-and-removebg-preview.png'
							alt='human body - chest'
							width='150'
							height='150'
						/>
					</Link>
					<Link to='/triceps'>
						<img
							className='Tri'
							src='https://o.remove.bg/downloads/84b8d2ce-52c5-4d7a-a9c1-7af1ab45beb2/Fotolia_110740617_S-300x300-removebg-preview.png'
							alt='human body - Triceps'
							width='150'
							height='150'
						/>
					</Link>
					<Link to='/deltoids'>
						<img
							className='Delt'
							src='https://o.remove.bg/downloads/e2c411bf-12bf-440b-ac22-7b91b6b8df2f/Deltoid-Muscle-Breakdown-removebg-preview.png'
							alt='human body - Deltoids'
							width='150'
							height='150'
						/>
					</Link>
					<Link to='/biceps'>
						<img
							className='Bi'
							src='https://o.remove.bg/downloads/79ef73dd-31c6-4af2-bf0d-6b8c16915591/Fotolia_110740333_S-693x675-removebg-preview.png'
							alt='human body - biceps'
							width='150'
							height='150'
						/>
					</Link>
					<Link to='/core'>
						<img
							className='core'
							src='https://o.remove.bg/downloads/c3ac1e8c-1d2d-402d-8780-6692564ae39f/abs-abdominals-muscle-group-exercises-removebg-preview.png'
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
						<Carousel.Item interval={500}>
							<img
								className='firstSlide'
								src='https://www.designyourway.net/blog/wp-content/uploads/2016/07/Motivational-wallpaper-quotes-6.jpg'
								alt='First slide'
							/>
						</Carousel.Item>
						<Carousel.Item interval={500}>
							<img
								className='secondSlide'
								src='https://www.designyourway.net/blog/wp-content/uploads/2016/07/Motivational-wallpaper-quotes-7.jpg'
								alt='second slide'
							/>
						</Carousel.Item>
						<Carousel.Item interval={1000}>
							<img
								className='thirdSlide'
								src='https://www.designyourway.net/blog/wp-content/uploads/2016/07/Muhammad-Ali-quote.jpg'
								alt='Third slide'
							/>
						</Carousel.Item>
						<Carousel.Item interval={500}>
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
								alt='Fifth slide'
							/>
						</Carousel.Item>
						<Carousel.Item interval={500}>
							<img
								className='sixthSlide'
								src='https://www.designyourway.net/blog/wp-content/uploads/2016/07/DESIGN-IS-DESTINY.jpg'
								alt='sixth slide'
							/>
						</Carousel.Item>
						<Carousel.Item interval={500}>
							<img
								className='seventhSlide'
								src='https://www.designyourway.net/blog/wp-content/uploads/2016/07/Motivational-wallpaper-quotes-18.jpg'
								alt='seventh slide'
							/>
						</Carousel.Item>
						<Carousel.Item interval={500}>
							<img
								className='eighthSlide'
								src='https://www.designyourway.net/blog/wp-content/uploads/2012/07/334240.jpg'
								alt='Eighth slide'
							/>
						</Carousel.Item>
						<Carousel.Item interval={500}>
							<img
								className='ninthSlide'
								src='https://www.designyourway.net/blog/wp-content/uploads/2016/07/Never-give-up.jpg'
								alt='ninth slide'
							/>
						</Carousel.Item>
						<Carousel.Item interval={500}>
							<img
								className='tenthSlide'
								src='https://www.designyourway.net/blog/wp-content/uploads/2016/07/Motivational-wallpaper-quotes-4.jpg'
								alt='tenth slide'
							/>
						</Carousel.Item>
						<Carousel.Item interval={500}>
							<img
								className='eleventhSlide'
								src='https://external-preview.redd.it/JOqi_n3w84_kIcQTt6LwAx5A33PxJ5fP0RKlZbTD58k.jpg?auto=webp&s=3258576f7df0884eae51310261fe182b8f7d16d9'
								alt='tenth slide'
							/>
						</Carousel.Item>
					</Carousel>
				</section>
			</main>
		);
	}
}

export default App;
