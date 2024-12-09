
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
    const newCompletedTasks = completedTask.filter(t => t.id!== id)
    setCompletedTask(newCompletedTasks)
  }

  console.log(completedTask);


  return (
    <div className='mx-auto max-w-screen-xl w-full min-h-screen bg-[url(../src/assets/bg-img.png)] bg-[60%_90%] bg-no-repeat'>
      <TaskInput setToDo={setToDo} />
      <div className='flex justify-around flex-col md:flex-row w-[80%] mt-5 mx-auto gap-y-5'>
        <div className='bg-orange-500/60 max-w-80 w-full min-h-64'>
          <h3 className='text-center mb-3 font-mono'>Your Task</h3>
          <ul className='p-2 flex flex-col gap-2'>
            {tasks.map((task) => (
              <PendingTaskList addToComplete={addToComplete} task={task} key={task.id} deleteToDo={deleteToDo} />
            ))}
          </ul>
        </div>
        <div className='bg-green-500/60 max-w-80 w-full min-h-64'>
          <h3 className='text-center mb-3 font-mono'>Completed Task</h3>
          <ul>
            {completedTask.map((task) => (
              <CompletedTaskList deleteToDo={deleteCompleteToDo} completedTask={task} />
            ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App