import React from 'react'
import { faCircleCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CompletedTask = ({ completedTask, deleteToDo }) => {
  return (
    <li onClick={()=>deleteToDo(completedTask.id)} key={completedTask.id} className='bg-orange-600 mb-2 p-2 mx-auto cursor-pointer flex gap-1 w-[90%] min-h-12 items-center rounded-xl'>
      <FontAwesomeIcon icon={faCircleCheck} />
      <p className='ml-2 cursor-pointer outline-none max-h-20 text-sm h-6 min-h-6 max-w-56 w-full text-white'>{completedTask.text}</p>
      <FontAwesomeIcon icon={faTrash} />
    </li>
  )
}

export default CompletedTask