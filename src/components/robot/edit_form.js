import React, { Component } from "react";

class EditForm extends Component {
    constructor(props) {
        super();

        this.state = {
            name: props.robot.name,
            serialnumber: props.robot.serialnumber,
            manufacturer: props.robot.manufacturerID,
            category: props.robot.categoryID
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeSerialnumber = this.handleChangeSerialnumber.bind(this);
        this.handleChangeManufacturer = this.handleChangeManufacturer.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }

    handleChangeSerialnumber(event) {
        this.setState({ serialnumber: event.target.value });
    }

    handleChangeManufacturer(event) {
        this.setState({ manufacturer: event.target.value });
    }

    handleChangeCategory(event) {
        this.setState({ category: event.target.value });
    }

    render() {

        const manufacturers = this.props.manufacturers.map((manufacturer, i) => {
            return (
                <option key={i} value={manufacturer.manufacturerID}>{manufacturer.name}</option>
            )
        }, this);

        const categories = this.props.categories.map((category, i) => {
            return (
                <option key={i} value={category.categoryID}>{category.name}</option>
            )
        }, this);

        return (
            <div className="post">
                <div className="alright">
                    <img src={"/images/" + this.props.robot.image} height={150} alt="robot" />
                </div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input required className="form-control" id="name" type="text" value={this.state.name} placeholder="Enter Name" onChange={this.handleChangeName}/>
                    <br />
                    <input required className="form-control" id="serialnumber" type="text" value={this.state.serialnumber} placeholder="Enter Serialnumber" onChange={this.handleChangeSerialnumber}/>
                    <br />
                    <select className="form-control" id="manufacturer" value={this.state.manufacturer} onChange={this.handleChangeManufacturer} >
                        {manufacturers}
                    </select>
                    <br />
                    <select className="form-control" id="category" value={this.state.category} onChange={this.handleChangeCategory} >
                        {categories}
                    </select>
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
        let robot = {
            robotID: this.props.robot.robotID,
            name: this.state.name,
            serialnumber: this.state.serialnumber,
            manufacturerID: parseInt(this.state.manufacturer),
            categoryID: parseInt(this.state.category),
            image: this.props.robot.image
        }
        this.props.updateRobot(robot)
    }
}

export default EditForm;