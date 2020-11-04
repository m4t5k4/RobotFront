import React, { Component } from "react";

class CreateForm extends Component {
    constructor(props) {
        super();

        this.state = {
            name: '',
            location: ''
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeLocation = this.handleChangeLocation.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName (event) {
        this.setState({ name: event.target.value });
    }

    handleChangeLocation (event) {
        this.setState({ location: event.target.value });
    }

    render() {

        return (
            <div className="post-container">
                <h1 className="post_heading">Create Manufacturer</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input required className="form-control"
                    id="name"
                    type="text" 
                    placeholder="Enter Name" 
                    value={this.state.name} 
                    onChange={this.handleChangeName} />
                    <br />
                    <input required className="form-control" 
                    id="location" 
                    type="text" 
                    placeholder="Enter Location"
                    value={this.state.location}
                    onChange={this.handleChangeLocation} />
                    <br />
                    <button>Create</button>
                </form>
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.createManufacturer({
            name: this.state.name,
            location: this.state.location
        })
        this.setState({
            name: '',
            location: ''
        })
    }
}

export default CreateForm;