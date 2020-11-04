import React from "react";

const Item = ({ robot, editRobot, deleteRobot } ) => {
    return (
        <div className="post">
            <div className="alright">
                <img height={150} src={"/images/" + robot.image } alt="robot" />
            </div>
            <h3> { robot.name } ({robot.category.name})</h3>
            <p>Serial Number: {robot.serialnumber} <br/>
                Manufacturer: {robot.manufacturer.name} </p>
            <div className="control-buttons">
                <button className="edit" onClick={() => {editRobot(robot.robotID); }}>Edit</button>
                &nbsp;&nbsp;
                <button className="delete" onClick={() => {deleteRobot(robot.robotID); }}>Delete</button>
            </div>
        </div>
    )
};

export default Item;