import React from "react";

import Item from './item';
import EditForm from './edit_form';

const List = ({ robots, manufacturers, categories, editRobot, deleteRobot, updateRobot }) => {
    const output = robots.map((robot, i) => {
        return (
            <div key={i} >
                { robot.isEditing ? <EditForm robot={robot}
                    manufacturers={manufacturers}
                    categories={categories}
                    updateRobot={updateRobot}
                    /> : <Item robot={robot}
                        editRobot={editRobot}
                        deleteRobot={deleteRobot}/>}
            </div>
        )
    });

    return (
        <div>
            <h1 className="post_heading">All Robots</h1>
            {output}
        </div>
    );
};

export default List;