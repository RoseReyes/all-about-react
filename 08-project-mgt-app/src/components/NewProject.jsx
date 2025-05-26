const NewProject = () => {
  return (
    <>
      <div>
        <button>Cancel</button>
        <button>Save</button>
      </div>
      <form>
        <label>TITLE</label>
        <input type='text' />

        <label>DESCRIPTION</label>
        <input type='text' />

        <label>DUE DATE</label>
        <input type='text' />
      </form>
    </>
  );
};

export default NewProject;
