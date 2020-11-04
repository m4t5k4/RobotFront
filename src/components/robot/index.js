import React from 'react';

//3.3
import CreateForm from './create_form';
import List from './list';

const Index = ({ robots, manufacturers, categories, createRobot, editRobot, deleteRobot, updateRobot }) => {
    return (
        <div>
            <CreateForm
                manufacturers={manufacturers}
                categories={categories}
                createRobot={createRobot}
            />
            <List
                robots={robots}
                manufacturers={manufacturers}
                categories={categories}
                editRobot={editRobot}
                deleteRobot={deleteRobot}
                updateRobot={updateRobot}/>
        </div>
    );
}

export default Index;