const ErrorModal = () => {
  return (
    <dialog className='backdrop:bg-stone-900/90 p-4 rounded-md shadow-md'>
      <h2>
        <strong>Incomplete Form</strong>
      </h2>
      <p>
        Please check the form and make sure all required fields are filled out
        correctly.
      </p>
    </dialog>
  );
};

export default ErrorModal;
