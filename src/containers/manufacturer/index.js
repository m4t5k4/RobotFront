import { connect } from 'react-redux';
import React, {Component} from 'react';
import store from '../../store';
import { loadCategories } from '../../actions/categories';
import { loadManufacturers, createManufacturer, editManufacturer, updateManufacturer, deleteManufacturer } from '../../actions/manufacturers';
import { loadRobots } from '../../actions/robots';

import Index from '../../components/manufacturer/index';

class IndexContainer extends Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
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

    render() {
        return (
            <Index
            manufacturers={this.props.manufacturers}
            createManufacturer={this.props.createManufacturer}
            editManufacturer={this.props.editManufacturer}
            updateManufacturer={this.props.updateManufacturer}
            deleteManufacturer={this.props.deleteManufacturer} />
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
        createManufacturer: (manufacturer) => {
            store.dispatch(createManufacturer(manufacturer));
        },
        deleteManufacturer: (index) => {
            store.dispatch(deleteManufacturer(index));
        },
        editManufacturer: (index) => {
            store.dispatch(editManufacturer(index));
        },
        updateManufacturer: (manufacturer) => {
            store.dispatch(updateManufacturer(manufacturer));
        }
    }
};

export default connect( mapStateToProps, mapDispatchToProps )(IndexContainer);