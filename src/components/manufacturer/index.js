import React from 'react';
import CreateForm from './create_form';
import List from './list';

const Index = ({manufacturers, createManufacturer, editManufacturer, updateManufacturer, deleteManufacturer}) => {
    return (
        <div>
            <CreateForm
            createManufacturer={createManufacturer} />
            <List
            manufacturers={manufacturers}
            editManufacturer={editManufacturer}
            updateManufacturer={updateManufacturer}
            deleteManufacturer={deleteManufacturer} />
        </div>
    );
}

export default Index;