import Input from './ui/CustomInput.jsx';

const NewProject = () => {
  return (
    <>
      <div>
        <menu className='flex items-center justify-end gap-4 my-4'>
          <li>
            <button>Cancel</button>
          </li>
          <li>
            <button>Save</button>
          </li>
        </menu>
      </div>
      <div>
        <Input
          label='TITLE'
          type='text'
        />
        <Input
          label='DESCRIPTION'
          textarea
        />
        <Input
          label='DUE DATE'
          type='date'
        />
      </div>
    </>
  );
};

export default NewProject;
