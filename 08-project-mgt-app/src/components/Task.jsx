import Input from './ui/Input';

const Task = () => {
  return (
    <section>
      <h2 className='text-3xl font-bold text-stone-600 mb-2'>Tasks</h2>
      <div className='flex items-start justify-between'>
        <Input type='text' />
        <button>Add Task</button>
      </div>
      LIST goes here
    </section>
  );
};

export default Task;
