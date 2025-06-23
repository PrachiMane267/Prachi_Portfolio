import React from 'react';
import { Code, Palette, Wrench, Lightbulb, Zap, Star } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Technical Skills',
      icon: <Code size={28} />,
      color: 'from-blue-500 to-purple-500',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'Advanced Java', level: 70 },
        { name: 'React', level: 75 }
      ]
    },
    {
      title: 'Design Skills',
      icon: <Palette size={28} />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Canva', level: 80 },
        { name: 'UI/UX Design', level: 85 },
        { name: 'Wireframing', level: 80 },
        { name: 'Prototyping', level: 75 },
        { name: 'Mobile Design', level: 70 }
      ]
    },
    {
      title: 'Tools & Frameworks',
      icon: <Wrench size={28} />,
      color: 'from-pink-500 to-orange-500',
      skills: [
        { name: 'Git', level: 75 },
        { name: 'Vite', level: 70 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'Node.js', level: 65 },
        { name: 'VS Code', level: 90 },
        { name: 'Responsive Design', level: 85 }
      ]
    },
    {
      title: 'Soft Skills',
      icon: <Lightbulb size={28} />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Problem Solving', level: 90 },
        { name: 'Quick Learning', level: 95 },
        { name: 'Adaptability', level: 90 },
        { name: 'Team Collaboration', level: 85 },
        { name: 'Communication', level: 80 },
        { name: 'Time Management', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
            <Zap className="mr-2 text-blue-600" size={16} />
            <span className="text-sm font-medium text-blue-600">What I bring to the table</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical expertise and creative abilities
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {category.title}
              </h3>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium text-sm">{skill.name}</span>
                      <span className="text-gray-500 text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Skills */}
        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Core Competencies</h3>
            <p className="text-gray-600 text-lg">The skills that define my expertise</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                skill: 'UI/UX Design', 
                level: 85, 
                icon: <Palette size={24} />,
                color: 'from-purple-500 to-pink-500',
                description: 'Creating intuitive and beautiful user interfaces'
              },
              { 
                skill: 'Frontend Development', 
                level: 80, 
                icon: <Code size={24} />,
                color: 'from-blue-500 to-purple-500',
                description: 'Building responsive and interactive web applications'
              },
              { 
                skill: 'Problem Solving', 
                level: 90, 
                icon: <Lightbulb size={24} />,
                color: 'from-orange-500 to-red-500',
                description: 'Analytical thinking and creative solution finding'
              }
            ].map((item) => (
              <div key={item.skill} className="text-center space-y-4">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${item.color} shadow-lg`}>
                  <div className="text-white">{item.icon}</div>
                </div>
                <h4 className="text-xl font-bold text-gray-900">{item.skill}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{item.skill}</span>
                    <span className="text-gray-500 text-sm">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`bg-gradient-to-r ${item.color} h-3 rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2`}
                      style={{ width: `${item.level}%` }}
                    >
                      <Star size={12} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;