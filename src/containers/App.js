import React, { Component } from 'react';
import CardList from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
class App extends Component {
	constructor() {
		super()
		this.state = {
		   robots:[],
		   searchfield: ''
		}
		// console.log('constructor');
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		 .then(response => response.json())
		 // .then(users => {});
		 .then(users => this.setState({robots: users}));
	}
		
		// console.log("componentDidMount");
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}


	render() {
	  const {robots, searchfield} = this.state;
	  const filteredRobots = robots.filter(robot =>{
		return robot.name.toLowerCase().includes(searchfield.toLowerCase())
	  })
	    return !robots.length ?
		<h1>Loading</h1> :
		(
		  <div className='tc'>
			<h1 className='f1'> Robofriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
			 <CardList robots = {filteredRobots} />
			</Scroll>
		  </div>
	    );
  	}
}

export default App;


// the life cycle

// these are the methods that are called when an instance is being created

// constructor()
// componentDidMount()
// render()
// componentDidMount()

// the render method will be called again as the cycle is again initiated.


