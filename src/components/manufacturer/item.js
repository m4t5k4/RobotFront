import React from "react";
import manufacturers from "../../reducers/manufacturers_reducer";

const Item = ({ manufacturer, editManufacturer, deleteManufacturer }) => {
    return (
        <div className="post">
            <h3>{manufacturer.name}</h3>
            <p>Location: {manufacturer.location}</p>
            <div className="control-buttons">
                <button className="edit" onClick={() => {editManufacturer(manufacturer.manufacturerID)}}>Edit</button>
                &nbsp;&nbsp;
                <button className="delete" onClick={() => {deleteManufacturer(manufacturers.manufacturerID)}}>Delete</button>
            </div>
        </div>
    )
};

export default Item;