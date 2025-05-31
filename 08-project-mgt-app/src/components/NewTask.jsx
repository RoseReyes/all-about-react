import Input from './ui/Input';

const NewTask = () => {
  return (
    <div>
      <header>
        <h1>Tasks</h1>
      </header>
      <div>
        <Input type='text' />
        <button>Add Task</button>
      </div>
      LIST goes here
    </div>
  );
};

export default NewTask;
