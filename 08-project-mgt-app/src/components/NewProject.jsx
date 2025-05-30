import Button from './ui/Button.jsx';
import Input from './ui/Input.jsx';
import Modal from './ui/Modal.jsx';
import { useRef } from 'react';

const NewProject = ({ onAdd }) => {
  const titleRef = useRef();
  const modalRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const handleSave = () => {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      modalRef.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modalRef}>
        <h2 className='text-xl font-bold text-stone-500 my-4'>
          <strong>Invalid Input</strong>
        </h2>
        <p className='text-stone-400 mb-4'>
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className='text-stone-400 mb-4'>
          Please check the form and make sure all fields are provided with valid
          values.
        </p>
      </Modal>
      <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
          <li>
            <Button className='text-stone-800 hover:text-stone-950'>
              Cancel
            </Button>
          </li>
          <li>
            <Button
              className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'
              onClick={handleSave}>
              Save
            </Button>
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
    </>
  );
};

export default NewProject;
