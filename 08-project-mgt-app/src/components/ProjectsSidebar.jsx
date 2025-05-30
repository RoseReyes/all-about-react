import Button from './ui/Button';

const ProjectsSidebar = ({
  onStartAddProject,
  projectList,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
      <h2>YOUR PROJECTS</h2>
      <div className='w-[35rem] mt-16'>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className='mt-8'>
        {projectList.map((project) => {
          let classes =
            'w-full text-left  px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800';

          if (project.id === selectedProjectId) {
            classes += ' bg-stone-800 text-stone-200';
          } else {
            classes += ' text-stone-400';
          }

          return (
            <li
              className='flex justify-between my-4'
              key={project.id}>
              <button
                className={classes}
                onClick={() => onSelectProject(project.id)}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectsSidebar;
