import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';

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
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        if(this.state.robots.length < 1) {
            return (<h1>Loading...</h1>)

        }else{
            return(
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange ={this.onSearchChange}/>
                    <CardList robots={filteredRobots}/>
                </div>
            )
        }
    }
};

export default App;