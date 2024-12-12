import { motion } from "motion/react"
import TaskInput from './component/TaskInput';
import PendingTaskList from './component/PendingTask'
import CompletedTaskList from './component/CompletedTask'
import { useState } from 'react';

const App = () => {

  let [tasks, setTask] = useState([])
  const [completedTask, setCompletedTask] = useState([])

  const setToDo = (value) => {
    setTask([...tasks, { id: crypto.randomUUID(), text: value, completed: false }])
  }

  const deleteToDo = (id) => {
    const newTask = tasks.filter(t => t.id !== id)
    setTask(newTask)
  }

  const addToComplete = (task) => {
    setCompletedTask((preState) => [...preState, task])
  }

  const deleteCompleteToDo = (id) => {
    const newCompletedTasks = completedTask.filter(t => t.id !== id)
    setCompletedTask(newCompletedTasks)
  }

  const handleEditTask = (id, newText) => {
    setTask(tasks.map(task => task.id === id ? { ...task, text: newText } : task));
  };

  return (
    <div className='mx-auto max-w-screen-xl w-full min-h-screen bg-[url(../src/assets/bg-img.png)] bg-[60%_90%] bg-no-repeat'>
      <h1 className='text-3xl font-bold font-serif ml-2'>My To Do List</h1>
      <TaskInput setToDo={setToDo} />
      <motion.div
        initial={{ y: 30 , opacity: 0.2 }}
        animate={{ y: 0 , opacity: 1}}
        transition={{ duration: 1 }}
       className='flex justify-around flex-col md:flex-row w-[80%] mt-5 mx-auto gap-y-5'>
        <div className='bg-orange-500/30 max-w-80 w-full min-h-64 backdrop-blur-sm'>
          <h3 className='text-center m-1 font-semibold font-serif text-lg '>Your Task</h3>
          <ul className='p-2 flex flex-col gap-2 overflow-y-scroll max-h-96'>
            {tasks.map((task) => (
              <PendingTaskList handleEditTask={handleEditTask} addToComplete={addToComplete} task={task} key={task.id} deleteToDo={deleteToDo} />
            ))}
          </ul>
        </div>
        <div className='bg-green-500/20 backdrop-blur-sm max-w-80 w-full min-h-64'>
          <h3 className='text-center m-1 font-semibold font-serif text-lg'>Completed Task</h3>
          <ul className='overflow-y-scroll max-h-96'>
            {completedTask.map((task) => (
              <CompletedTaskList key={task.id} deleteToDo={deleteCompleteToDo} completedTask={task} />
            ))
            }
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

export default App