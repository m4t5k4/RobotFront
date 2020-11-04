import { connect } from 'react-redux';
import React, {Component} from 'react';
import store from '../../store';
import { loadCategories, createCategory, editCategory, updateCategory, deleteCategory } from '../../actions/categories';
import { loadManufacturers } from '../../actions/manufacturers';
import { loadRobots } from '../../actions/robots';

import Index from '../../components/category/index';

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
            categories={this.props.categories}
            createCategory={this.props.createCategory}
            editCategory={this.props.editCategory}
            updateCategory={this.props.updateCategory}
            deleteCategory={this.props.deleteCategory} />
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
        createCategory: (category) => {
            store.dispatch(createCategory(category));
        },
        deleteCategory: (index) => {
            store.dispatch(deleteCategory(index));
        },
        editCategory: (index) => {
            store.dispatch(editCategory(index));
        },
        updateCategory: (category) => {
            store.dispatch(updateCategory(category));
        }
    }
};

export default connect( mapStateToProps, mapDispatchToProps )(IndexContainer);