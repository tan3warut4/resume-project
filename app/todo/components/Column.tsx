import React from 'react'
import Card from './Card'

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
            {tasks.map((data) => <Card key={data} content={data} />)}
        </div>
    )
}

export default Column