import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './app.css';
import { setSearchField, requestRobots } from '../Redux/Actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
})
const mapDispatchToProps = dispatch => ({
        onSearchChange: event => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => requestRobots(dispatch)
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
        this.props.onRequestRobots()
    }

    render(){
        const { searchField, onSearchChange, isPending, robots } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending? 
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