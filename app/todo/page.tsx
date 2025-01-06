"use client";
import React, { JSX } from 'react'
import Button from './components/Button'
import { initialData, initialDataProps } from './init-data'
import Column from './components/Column';
import { DragDropContext } from 'react-beautiful-dnd';

const Page = () => {
  const renderColumn = (data: initialDataProps): JSX.Element => {
    return (
      <DragDropContext>
        {data.columnOrder.map((columnId: string) => {
          const column = data?.columns[columnId];
          const tasks = data?.columns[columnId].taskId;
          return (
            <Column key={column.id} column={column} tasks={tasks} />
          );
        })}
      </DragDropContext>
    );
  }
  const handleClick = (text: string) => {
    console.log(text)
  }
  return (
    <>
      <div className='flex justify-center text-3xl mt-5'>Todo List</div>
      <div className='flex justify-center'>
        <input className='border px-3 py-2 rounded-lg my-4 w-96' type='text' />
      </div>
      <div className='flex justify-center gap-2 mt-5'>
        <Button textColor='text-white' type='frontend' onClick={() => handleClick("Leetcode")} name='Leetcode' buttonHoverColor='bg-yellow-100' />
        <Button textColor='text-white' type='backend' onClick={() => handleClick("SystemDesign")} name='SystemDesign' buttonHoverColor='bg-green-100' />
        <Button textColor='text-white' type='systemDesign' onClick={() => handleClick("Development")} name='Development' buttonHoverColor='bg-blue-100' />
        <Button textColor='text-white' type='leetCode' onClick={() => handleClick("Frontend")} name='Frontend' buttonHoverColor='bg-slate-100' />
        <select className='rounded-lg text-md px-2 font-bold border'>
          <option>To do</option>
          <option>In progress</option>
          <option>Done</option>
        </select>
        <Button name='Add' textColor='text-slate-800' type='added' onClick={() => handleClick("Add")} buttonHoverColor='bg-slate-200' />
      </div>
      <div className='grid grid-flow-col auto-cols-auto gap-4 mt-10 px-20'>
        {renderColumn(initialData)}
      </div>
    </>
  )
}

export default Page