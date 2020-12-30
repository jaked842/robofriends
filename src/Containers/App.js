import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './app.css';

class App extends Component {
    constructor(){
        super()
        this.state={
            robots: [],
            searchfield: '',
            loading: ''
        }
    }
    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(robots => 
                this.setState({
                robots: robots
                })
            )
    }
    onSearchChange = (event) => {
        this.setState({
            searchfield: event.target.value
        })
    }
    render(){
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length? 
            (<h1>Loading...</h1>)
        :
            (
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange ={this.onSearchChange}/>
                    <CardList robots={filteredRobots}/>
                </div>
            )
    }
};
export default App;