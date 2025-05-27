import Input from './ui/Input.jsx';
import { useRef } from 'react';

const NewProject = () => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  return (
    <div className='w-[35rem] mt-16'>
      <menu className='flex items-center justify-end gap-4 my-4'>
        <li>
          <button className='text-stone-800 hover:text-stone-950'>
            Cancel
          </button>
        </li>
        <li>
          <button className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input
          ref={titleRef}
          label='Title'
          type='text'
        />
        <Input
          ref={descriptionRef}
          label='Description'
          textarea
        />
        <Input
          ref={dueDateRef}
          label='Due Date'
          type='date'
        />
      </div>
    </div>
  );
};

export default NewProject;
