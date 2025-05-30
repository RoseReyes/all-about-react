import { useImperativeHandle, useRef } from 'react';

import { createPortal } from 'react-dom';

const Modal = ({ children, ref }) => {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      className='backdrop:bg-stone-900/90 p-4 rounded-md shadow-md'
      ref={dialogRef}>
      {children}
    </dialog>,
    document.getElementById('modal-root')
  );
};

export default Modal;
