import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Pectorals from './Components/Pectorals';

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
            <main>     
				       <Route
					         exact
					         path='/'
					         render={() => {
						       return (
							       <Pectorals workout ={this.state.workouts} /> 
					  	);
				  	}}
			  	/>
        </main> 
			</div>
		);
	}
}

export default App;
