import React, { useState } from 'react'

const TaskInput = ({ setToDo }) => {

  const [value, setValue] = useState('');

  let handleSubmit = (e) => {
    e.preventDefault()
    if (value) {
      setToDo(value)
      setValue("");
    } else {
      alert('Please enter a task!')
    }
  }

  return (
    <div className='max-w-96 min-h-28 p-2 rounded-3xl mx-auto relative top-5'>
      <form className='flex w-full flex-col p-2 font-mono' onSubmit={handleSubmit} name='task-input'>
        <label htmlFor="task-input"
          className='mx-auto text-xl mb-2'>
          Enter Your Task
        </label>

        <div className='flex w-full'>
          <input id="task-input"
            name='task-input'
            type="text"
            autoFocus
            onChange={(e) => setValue(e.target.value)}
            value={value}
            className='outline-none p-2 max-w-60 w-full rounded-md'
          />
          <button type='submit'
            className='max-w-28 w-full bg-stone-950 text-white ml-2 rounded-md hover:bg-stone-400 font-mono'>
            Add
          </button>
        </div>

      </form>
    </div>
  )
}

export default TaskInput
