import React, { Component } from 'react';
import { loadCategories } from '../actions/categories';
import { loadManufacturers } from '../actions/manufacturers';
import { loadRobots } from '../actions/robots';

import Home from '../components/home';
import store from '../store';
import { connect } from 'react-redux';

class HomeContainer extends Component {
    constructor(props) {
        super();

        /* this.state = {
            robots: [],
            manufacturers: [],
            categories: []
        } */
    }

    componentDidMount() {
        if (this.props.robots.length === 0) {
            store.dispatch(loadRobots());
        }
        if (this.props.manufacturers.length === 0) {
            store.dispatch(loadManufacturers());
        }
        if (this.props.categories.length === 0) {
            store.dispatch(loadCategories());
        }
    }

    render() {
        return (
            <Home />
        );
    }
}

const mapStateToProps = (state) => {
    // mapStateToProps: mapping of the props with the state
    return {
        robots: state.robots,
        manufacturers: state.manufacturers,
        categories: state.categories
    }
};

const mapDispatchToProps = (dispatch) => {
    // mapDispatchToProps: mapping of the eventhandlers with dispatch
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);