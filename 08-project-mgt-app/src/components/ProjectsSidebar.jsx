import Button from './ui/Button';

const ProjectsSidebar = ({ onStartAddProject }) => {
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
      <h2>YOUR PROJECTS</h2>
      <div className='w-[35rem] mt-16'>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className='mt-8'></ul>
    </aside>
  );
};

export default ProjectsSidebar;
