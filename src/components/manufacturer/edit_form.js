import React, { Component } from "react";

class EditForm extends Component {
    constructor(props) {
        super();

        this.state = {
            name: props.manufacturer.name,
            location: props.manufacturer.location
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeLocation = this.handleChangeLocation.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }

    handleChangeLocation(event) {
        this.setState({ location: event.target.value });
    }

    render() {
        return (
            <div className="post">
                <form className="form" onSubmit={this.handleSubmit}>
                    <input required className="form-control" id="name" type="text" value={this.state.name} placeholder="Enter Name" onChange={this.handleChangeName}/>
                    <br />
                    <input required className="form-control" id="location" type="text" value={this.state.location} placeholder="Enter Location" onChange={this.handleChangeLocation}/>
                    <br />
                    <div className="control-buttons">
                        <button className="edit">Update</button>
                    </div>
                </form>
            </div>

        );
    }

    handleSubmit(event) {
        event.preventDefault();
        let manufacturer = {
            manufacturerID: this.props.manufacturer.manufacturerID,
            name: this.state.name,
            location: this.state.location
        }
        this.props.updateManufacturer(manufacturer)
    }
}

export default EditForm;