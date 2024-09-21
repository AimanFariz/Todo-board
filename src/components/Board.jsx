import React from 'react'

export default function Board({task,index,taskList,setTaskList}) {

const handleDelete = () =>{
    let removeIndex = taskList.indexOf(task)
    taskList.splice(removeIndex,1)
    setTaskList((currentList)=>currentList.filter(todo=>index===removeIndex))
}
  return (
    <>
    <div className='max-w-md border rounded-xl flex flex-col items-center justify-center text-center text-lg overflow-auto py-3 px-2'>
        <p>{task}</p>
        <button
        className='bg-red-600 text-white rounded-lg py-1 px-2 my-1'
        onClick={handleDelete}
        >Delete</button>
    </div>
    </>
  )
}
