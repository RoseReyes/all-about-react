export const NewTask = () => {
  return (
    <>
      <div className='flex items-start justify-between'>
        <input type='text' />
        <button className='text-stone-600 hover:text-stone-950'>
          Add Task
        </button>
      </div>
      <p className='text-stone-800 mb-4'>
        This project does not have any tasks yet.
      </p>
      <ul></ul>
    </>
  );
};

export default NewTask;
