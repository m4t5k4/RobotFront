import React from "react";

const Item = ({ category, editCategory, deleteCategory }) => {
    return (
        <div className="post">
            <h3>{category.name}</h3>
            <p>Comment: {category.comment}</p>
            <div className="control-buttons">
                <button className="edit" onClick={() => {editCategory(category.categoryID)}}>Edit</button>
                &nbsp;&nbsp;
                <button className="delete" onClick={() => {deleteCategory(category.categoryID)}}>Delete</button>
            </div>
        </div>
    )
};

export default Item;