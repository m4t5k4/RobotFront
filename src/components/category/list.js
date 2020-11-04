import React from "react";
import Item from './item';
import EditForm from './edit_form';

const List = ( { categories, editCategory, updateCategory, deleteCategory } ) => {
    const output = categories.map ( (category, i) => {
        return (
            <div key={i} >
                {category.isEditing ? <EditForm category={category}
                    updateCategory={updateCategory}
                /> : <Item category={category}
                    editCategory={editCategory}
                    deleteCategory={deleteCategory} />}
            </div>
        )
    });

    return (
        <div>
            <h1 className="post_heading">All Categories</h1>
            {output}
        </div>
    );
};


export default List;