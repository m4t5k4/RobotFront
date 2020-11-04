import React, { Component } from "react";

class CreateForm extends Component {
    constructor(props) {
        super();

        this.state = {
            name: '',
            serialnumber: '',
            manufacturer: '',
            category: ''
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeSerialnumber = this.handleChangeSerialnumber.bind(this);
        this.handleChangeManufacturer = this.handleChangeManufacturer.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName (event) {
        this.setState({ name: event.target.value });
    }

    handleChangeSerialnumber (event) {
        this.setState({ serialnumber: event.target.value });
    }

    handleChangeManufacturer (event) {
        this.setState({ manufacturer: event.target.value });
    }

    handleChangeCategory (event) {
        this.setState({ category: event.target.value });
    }

    render () {

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
            <div className="post-container">
                <h1 className="post_heading">Create Robot</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input
                        required
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Enter Name"
                        value={this.state.name}
                        onChange={this.handleChangeName} />
                    <br />
                    <input
                        required
                        className="form-control"
                        id="serialnumber"
                        type="text"
                        placeholder="Enter Serialnumber"
                        value={this.state.serialnumber}
                        onChange={this.handleChangeSerialnumber} />
                    <br />
                    <select
                        className="form-control"
                        id="manufacturer"
                        placeholder="Manufacturer"
                        value={this.state.manufacturer}
                        onChange={this.handleChangeManufacturer}>
                            <option disabled selected hidden value="">Manufacturer</option>
                            {manufacturers}
                    </select>
                    <br />
                    <select
                        className="form-control"
                        id="category"
                        placeholder="Category"
                        value={this.state.category}
                        onChange={this.handleChangeCategory}>
                            <option disabled selected hidden value="">Category</option>
                            {categories}
                    </select>
                    <br />
                    <button>Create</button>
                </form>
            </div>
        );
    }

    handleSubmit (event) {
        event.preventDefault();
        this.props.createRobot(
            {
                name: this.state.name,
                serialnumber: this.state.serialnumber,
                manufacturerID: parseInt(this.state.manufacturer),
                categoryID: parseInt(this.state.category),
                image: "robot" + Math.floor(Math.random()*10) + ".jpg"
            }
        )
        console.log({
            name: this.state.name,
            serialnumber: this.state.serialnumber,
            manufacturerID: parseInt(this.state.manufacturer),
            categoryID: parseInt(this.state.category),
            image: "robot" + Math.floor(Math.random() * 10) + ".jpg"
        });
        this.setState({
            name: "",
            serialnumber: "",
            manufacturerID: "",
            categoryID: "",
            image: ""
        })
    }
}

export default CreateForm;