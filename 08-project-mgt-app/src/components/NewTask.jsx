import { TaskContext } from '../store/task-context';
import { useContext } from 'react';
import { useState } from 'react';

export const NewTask = () => {
  const { addTask } = useContext(TaskContext);

  const [enteredTask, setEnteredTask] = useState('');

  const handleChange = (event) => {
    setEnteredTask(event.target.value);
  };

  const handleClick = () => {
    if (enteredTask.trim() === '') {
      return;
    }

    addTask(enteredTask);
    setEnteredTask('');
  };

  return (
    <>
      <div className='flex items-center gap-4'>
        <input
          value={enteredTask}
          type='text'
          className='w-64 px-2 py-1 rounded-sm bg-stone-200'
          onChange={handleChange}
        />
        <button
          className='text-stone-700 hover:text-stone-950'
          onClick={handleClick}>
          Add Task
        </button>
      </div>
    </>
  );
};

export default NewTask;
