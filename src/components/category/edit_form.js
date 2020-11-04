import React, { Component } from "react";

class EditForm extends Component {
    constructor(props) {
        super();

        this.state = {
            name: props.category.name,
            comment: props.category.comment
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeLocation = this.handleChangeComment.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }

    handleChangeComment(event) {
        this.setState({ comment: event.target.value });
    }

    render() {
        return (
            <div className="post">
                <form className="form" onSubmit={this.handleSubmit}>
                    <input required className="form-control" id="name" type="text" value={this.state.name} placeholder="Enter Name" onChange={this.handleChangeName}/>
                    <br />
                    <input required className="form-control" id="comment" type="text" value={this.state.comment} placeholder="Enter Comment" onChange={this.handleChangeComment}/>
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
        let category = {
            categoryID: this.props.category.categoryID,
            name: this.state.name,
            comment: this.state.comment
        }
        this.props.updateCategory(category)
    }
}

export default EditForm;