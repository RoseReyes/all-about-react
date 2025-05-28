import Button from './ui/Button';

const ProjectsSidebar = ({ onStartAddProject, projectList }) => {
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
      <h2>YOUR PROJECTS</h2>
      <div className='w-[35rem] mt-16'>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className='mt-8'>
        {projectList.map((project) => {
          return (
            <li
              className='flex justify-between my-4'
              key={project.id}>
              {project.title}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectsSidebar;
