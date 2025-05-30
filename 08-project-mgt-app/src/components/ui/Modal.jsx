import { useImperativeHandle, useRef } from 'react';

import Button from './Button';
import { createPortal } from 'react-dom';

const Modal = ({ children, ref }) => {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      className='backdrop:bg-stone-900/90 p-4 rounded-md shadow-md'
      ref={dialogRef}>
      {children}
      <form
        method='dialog'
        className='flex justify-end'>
        <Button className='mt-6 px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>
          Close
        </Button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
};

export default Modal;
