const ProjectsSidebar = () => {
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
      <h2>YOUR PROJECTS</h2>
      <div className='w-[35rem] mt-16'>
        <button className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'>
          + Add Project
        </button>
      </div>
      <ul className='mt-8'></ul>
    </aside>
  );
};

export default ProjectsSidebar;
