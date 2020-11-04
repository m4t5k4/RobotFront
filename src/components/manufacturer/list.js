import React from "react";
import Item from './item';
import EditForm from './edit_form';

const List = ( { manufacturers, editManufacturer, updateManufacturer, deleteManufacturer } ) => {
    const output = manufacturers.map ( (manufacturer, i) => {
        return (
            <div key={i} >
                {manufacturer.isEditing ? <EditForm manufacturer={manufacturer}
                    updateManufacturer={updateManufacturer}
                /> : <Item manufacturer={manufacturer}
                    editManufacturer={editManufacturer}
                    deleteManufacturer={deleteManufacturer} />}
            </div>
        )
    });

    return (
        <div>
            <h1 className="post_heading">All Manufacturers</h1>
            {output}
        </div>
    );
};


export default List;