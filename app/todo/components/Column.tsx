import React from 'react'
import Card from './Card'
import { Droppable } from 'react-beautiful-dnd'
import TaskList from './TaskList'

interface columnProps {
    tasks: string[]
    column: {
        id: string
        title: string,
        taskId: string[]
    }
}

const Column: React.FC<columnProps> = ({ tasks, column }) => {

    return (
        <div className='px-10'>
            <p className='text-3xl font-extrabold mb-5 text-center ' >{column.title}</p>
            <Droppable droppableId={column.title} isDropDisabled={false} isCombineEnabled={false} ignoreContainerClipping={false} >
                {(provided) => (
                    <TaskList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {tasks.map((data, index) => <Card key={index} content={data} index={index} />)}
                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
        </div >
    )
}

export default Column