import { connect } from 'react-redux';
import React, { Component } from 'react';

import Index from '../../components/robot/index';
import store from '../../store';
import { loadCategories } from '../../actions/categories';
import { loadManufacturers } from '../../actions/manufacturers';
import { createRobot, loadRobots, updateRobot, deleteRobot, editRobot } from '../../actions/robots';


class IndexContainer extends Component {
    constructor(props) {
        super();
    }

    componentDidMount () {
        // TODO: aanvullen
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

    render () {
        return (
            <Index
                robots={this.props.robots}
                manufacturers={this.props.manufacturers}
                categories={this.props.categories}
                createRobot={this.props.createRobot}
                editRobot={this.props.editRobot}
                deleteRobot={this.props.deleteRobot}
                updateRobot={this.props.updateRobot}/>
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
        createRobot : (robot) => {
            store.dispatch(createRobot(robot));
        },
        deleteRobot: (index) => {
            store.dispatch(deleteRobot(index));
        },
        editRobot: (index) => {
            store.dispatch(editRobot(index));
        },
        updateRobot: (robot) => {
            store.dispatch(updateRobot(robot));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);