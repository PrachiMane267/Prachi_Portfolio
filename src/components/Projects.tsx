

// const Projects = () => {
//   const projects = [
//     {
//       title: "Smart Farming UI",
//       link: "https://github.com/PrachiMane267/Smart_Farmimg_System_UI"
//     },
//     {
//       title: "Job Application Website",
//       link: "https://github.com/PrachiMane267/PM_Projects/tree/main/Project_1%20Job%20Application%20Website"
//     },
//     {
//       title: "Parallax Website",
//       link: "https://github.com/PrachiMane267/PM_Projects/tree/main/Project_2%20Parallax%20Website"
//     },
//     {
//       title: "Task List",
//       link: "https://github.com/PrachiMane267/PM_Projects/tree/main/Project_4%20Task%20List"
//     },
//     {
//       title: "Amora Dummy Website",
//       link: "https://github.com/PrachiMane267/PM_Projects/tree/main/Project_5%20Amora%20Dummy%20Website"
//     },
//     {
//       title: "Mobile UI Interface",
//       link: "https://github.com/PrachiMane267/Mobile_UI_Interface"
//     },
//   ];

//   return (
//     <div>
//       <h2 className="text-3xl font-bold mb-6">My Projects</h2>
//       <ul>
//         {projects.map((project, index) => (
//           <li key={index} className="mb-4">
//             <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
//               {project.title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Projects;
import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, Layers, Users, Briefcase, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Smart Farming UI',
      category: 'UI/UX Design • Internship',
      description: 'Designed intuitive interfaces for consultant and vendor pages during my internship at CodexSlinger. Created user-friendly dashboards for agricultural technology platform with focus on data visualization and user experience.',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Figma', 'UI Design', 'Dashboard', 'Mobile-first', 'Data Visualization'],
      icon: <Layers size={24} />,
      color: 'from-green-500 to-emerald-500',
      featured: true,
      githubLink: 'https://github.com/PrachiMane267/Smart_Farmimg_System_UI',
    },
    {
      title: 'Job Application Website',
      category: 'Full-Stack Development',
      description: 'Comprehensive web application for job seekers and employers. Features include advanced job listings, application tracking system, user authentication, and responsive design for optimal user experience.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['JavaScript', 'HTML/CSS', 'Responsive', 'Forms', 'Authentication'],
      icon: <Users size={24} />,
      color: 'from-blue-500 to-purple-500',
      featured: true,
      githubLink: 'https://github.com/PrachiMane267/PM_Projects/tree/main/Project_1%20Job%20Application%20Website',
    },
    {
      title: 'Parallax Website',
      category: 'Interactive Web Development',
      description: 'Stunning interactive website with smooth parallax scrolling effects and advanced animations. Demonstrates mastery of JavaScript and CSS animation techniques with performance optimization.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['JavaScript', 'CSS Animations', 'Parallax', 'Interactive', 'Performance'],
      icon: <Globe size={24} />,
      color: 'from-purple-500 to-pink-500',
      githubLink: 'https://github.com/PrachiMane267/PM_Projects/tree/main/Project_2%20Parallax%20Website',
    },
    {
      title: 'Task List',
      category: 'Web Application Interface',
      description: 'Clean and intuitive task management application with drag-and-drop functionality, categories, priority levels for seamless user experience.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Local Storage', 'Drag & Drop', 'UI/UX', 'State Management'],
      icon: <Layers size={24} />,
      color: 'from-orange-500 to-red-500',
      githubLink: 'https://github.com/PrachiMane267/PM_Projects/tree/main/Project_4%20Task%20List',
    },
    {
      title: 'Amora Dummy Website',
      category: 'Corporate Web Design',
      description: 'Modern corporate website design with elegant layouts, smooth animations, and responsive design principles. Focus on professional branding and user engagement.',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Corporate Design', 'Branding', 'Responsive', 'Modern', 'SEO'],
      icon: <Briefcase size={24} />,
      color: 'from-teal-500 to-cyan-500',
      githubLink: 'https://github.com/PrachiMane267/PM_Projects/tree/main/Project_5%20Amora%20Dummy%20Website',
    },
    {
      title: 'Mobile UI Interface',
      category: 'Mobile UI Design • Internship',
      description: 'Designed comprehensive mobile interface for CodexSlinger startup during my internship. Created intuitive mobile app designs focusing on user experience, modern UI patterns, and seamless navigation.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Mobile UI', 'Figma', 'Startup', 'Internship', 'User Experience'],
      icon: <Smartphone size={24} />,
      color: 'from-pink-500 to-rose-500',
      githubLink: 'https://github.com/PrachiMane267/Mobile_UI_Interface',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
            <Zap className="mr-2 text-purple-600" size={16} />
            <span className="text-sm font-medium text-purple-600">My work showcase</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A showcase of my latest work in UI/UX design and web development, demonstrating creativity and technical expertise.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {projects.map((project) => (
            <div key={project.title} className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100">
              <div className="relative overflow-hidden h-64">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200 shadow-lg">
                      <Github size={20} className="text-gray-700" />
                    </a>
                  </div>
                </div>
                <div className="absolute top-6 left-6">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/90 backdrop-blur-sm text-gray-700 shadow-lg">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color} mr-2`}></div>
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${project.color} shadow-lg text-white`}>
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300">
            <span>View All Projects</span>
            <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
