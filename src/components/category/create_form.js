import React, { Component } from "react";

class CreateForm extends Component {
    constructor(props) {
        super();

        this.state={
            name: '',
            comment: ''
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeComment = this.handleChangeComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName (event) {
        this.setState({ name: event.target.value });
    }

    handleChangeComment (event) {
        this.setState({ comment: event.target.value });
    }

    render() {

        return (
            <div className="post-container">
                <h1 className="post_heading">Create Category</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input required className="form-control" 
                    id="name" 
                    type="text" 
                    placeholder="Enter Name"
                    value={this.state.name}
                    onChange={this.handleChangeName} />
                    <br />
                    <textarea required rows="5" cols="28" className="form-control" 
                    id="comment" 
                    type="text" 
                    placeholder="Enter Comment"
                    value={this.state.comment}
                    onChange={this.handleChangeComment} />
                    <br />
                    <button>Create</button>
                </form>
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.createCategory({
            name: this.state.name,
            comment: this.state.comment
        });
        this.setState({
            name: '',
            comment: ''
        })
    }
}

export default CreateForm;