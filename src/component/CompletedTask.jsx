import React from 'react'
import { motion } from "motion/react"
import { faCircleCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CompletedTask = ({ completedTask, deleteToDo }) => {

  return (
    <motion.li
      initial={{ x: -20 }}
      animate={{ x: 0 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => deleteToDo(completedTask.id)} key={completedTask.id} className='bg-orange-600 mb-2 p-2 mx-auto cursor-pointer flex gap-1 w-[90%] min-h-12 items-center rounded-xl'>
      <FontAwesomeIcon icon={faCircleCheck} />
      <p className='ml-2 cursor-pointer outline-none max-h-20 text-sm h-6 min-h-6 max-w-56 w-full text-white'>{completedTask.text}</p>
      <FontAwesomeIcon icon={faTrash} />
    </motion.li>
  )
}

export default CompletedTask