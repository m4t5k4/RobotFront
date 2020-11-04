import React from 'react';
import CreateForm from './create_form';
import List from './list';

const Index = ({categories, createCategory, editCategory, updateCategory, deleteCategory}) => {
    return (
        <div>
            <CreateForm
            createCategory={createCategory} />
            <List
            categories={categories}
            editCategory={editCategory}
            updateCategory={updateCategory}
            deleteCategory={deleteCategory} />
        </div>
    );
}

export default Index;