import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Smart Farming UI",
      link: "https://github.com/PrachiMane267/Smart_Farmimg_System_UI"
    },
    {
      title: "Job Application Website",
      link: "https://github.com/PrachiMane267/PM_Projects/tree/main/Project_1%20Job%20Application%20Website"
    },
    {
      title: "Parallax Website",
      link: "https://github.com/PrachiMane267/PM_Projects/tree/main/Project_2%20Parallax%20Website"
    },
    {
      title: "Task List",
      link: "https://github.com/PrachiMane267/PM_Projects/tree/main/Project_4%20Task%20List"
    },
    {
      title: "Amora Dummy Website",
      link: "https://github.com/PrachiMane267/PM_Projects/tree/main/Project_5%20Amora%20Dummy%20Website"
    },
    {
      title: "Mobile UI Interface",
      link: "https://github.com/PrachiMane267/Mobile_UI_Interface"
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index} className="mb-4">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              {project.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
