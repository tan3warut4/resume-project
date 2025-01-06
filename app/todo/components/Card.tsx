import React from 'react'
import Button from './Button'
import { initialData } from '../init-data'
import { Draggable } from 'react-beautiful-dnd'

interface CardProps {
  content: string
  index: number
}

const Card: React.FC<CardProps> = ({ content, index }) => {
  const task = initialData.tasks[content as keyof typeof initialData.tasks]
  return (
    <Draggable
      draggableId={task.title}
      index={index}
    >{(provided) => (
      <div className='relative rounded-lg w-full p-5 bg-white shadow-lg mt-5 overflow-hidden'
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        <button className='absolute right-4 hover:bg-slate-400 content-center h-6 w-6 rounded-full bg-slate-300 text-center text-sm text-white'>x</button>
        <p className='font-bold mb-3'>{task.title}</p>
        <div className='max-h-11 overflow-hidden mb-5'>
          <p>{task.content}</p>
        </div>
        {task.tag.map((data) => <Button key={data} type={data} textColor='text-white' onClick={() => console.log("Frontend")} name={data} buttonHoverColor='bg-slate-100' />
        )}
      </div>
    )}

    </Draggable>

  )
}

export default Card