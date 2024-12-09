
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faPenToSquare, faTrashAlt } from '@fortawesome/free-regular-svg-icons'


const PendingLTask = ({ task, deleteToDo, addToComplete, handleEditTask }) => {

  const [read, setRead] = useState(true)

  const handleEdit = (e)=>{
    e.target.previousElementSibling.focus()
    setRead(!read)
  }

  return (
    <li key={task.id} className='bg-orange-600 cursor-pointer p-2 flex gap-3 min-h-12 items-center rounded-xl'>
      <FontAwesomeIcon key={task.id} icon={faCircleCheck} />
      <textarea name="task"
        value={task.text}
        onInput={(e) => handleEditTask(task.id, e.target.value)}
        onClick={() => { addToComplete(task), deleteToDo(task.id) }}
        autoFocus
        readOnly = {read}  
        className='cursor-pointer outline-none max-h-20 text-sm h-6 min-h-6 max-w-52 w-full text-white bg-transparent overflow-y-hidden'
      >
      </textarea>
      <FontAwesomeIcon
        className='hover:text-white'
        onClick={(e)=>{handleEdit(e)}}
        key={crypto.randomUUID()}
        // style={{ color:() ? 'white' : 'initial' }}
        icon={faPenToSquare} />
      <FontAwesomeIcon
        className='hover:text-white'
        key={crypto.randomUUID()}
        onClick={() => deleteToDo(task.id)}
        // style={{ color: () ? 'white' : 'initial' }}
        icon={faTrashAlt} />
    </li>)
}

export default PendingLTask