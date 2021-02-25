import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './app.css';
import { setSearchField } from '../Actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
        searchField: state.searchField
})
const mapDispatchToProps = dispatch => ({
        onSearchChange: event => dispatch(setSearchField(event.target.value))
})


class App extends Component {
    constructor(){
        super()
        this.state={
            robots: [],
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

    render(){
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return !robots.length? 
            (<h1>Loading...</h1>)
        :
            (
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange ={onSearchChange}/>
                    <CardList robots={filteredRobots}/>
                </div>
            )
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);