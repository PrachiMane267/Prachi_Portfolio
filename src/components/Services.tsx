import React from 'react';
import { Palette, Code, Smartphone, Globe, Figma, Users, Zap, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'UI/UX Design',
      icon: <Palette size={32} />,
      color: 'from-pink-500 to-rose-500',
      description: 'Creating beautiful, user-centered interfaces that provide exceptional user experiences and drive engagement.',
      features: [
        'User Research & Analysis',
        'Wireframes & Prototypes',
        'Mobile-first Design',
        'Design Systems',
        'Usability Testing'
      ],
    },
    {
      title: 'Web Development',
      icon: <Code size={32} />,
      color: 'from-blue-500 to-purple-500',
      description: 'Building responsive, modern websites with clean code, optimal performance, and seamless user interactions.',
      features: [
        'HTML/CSS/JavaScript',
        'React Applications',
        'Responsive Design',
        'Performance Optimization',
        'Cross-browser Compatibility'
      ],
    },
    {
      title: 'Mobile Design',
      icon: <Smartphone size={32} />,
      color: 'from-green-500 to-teal-500',
      description: 'Designing intuitive mobile interfaces that work seamlessly across all devices and platforms.',
      features: [
        'iOS & Android Design',
        'Touch-friendly Interfaces',
        'Responsive Mobile Web',
        'App Store Guidelines',
        'Interactive Prototypes'
      ],
    },
    {
      title: 'Figma Prototyping',
      icon: <Figma size={32} />,
      color: 'from-purple-500 to-pink-500',
      description: 'Creating interactive prototypes and comprehensive design systems using industry-standard tools.',
      features: [
        'Interactive Prototypes',
        'Component Libraries',
        'Design Handoff',
        'Collaborative Design',
        'Version Control'
      ],
    },
    {
      title: 'Web Applications',
      icon: <Globe size={32} />,
      color: 'from-orange-500 to-red-500',
      description: 'Developing full-featured web applications with modern frameworks and cutting-edge technologies.',
      features: [
        'Single Page Applications',
        'Database Integration',
        'Authentication Systems',
        'API Development',
        'Cloud Deployment'
      ],
    },
    {
      title: 'Consultation',
      icon: <Users size={32} />,
      color: 'from-teal-500 to-cyan-500',
      description: 'Providing expert advice on design strategy, user experience, and technical implementation.',
      features: [
        'UX Audits',
        'Design Strategy',
        'Technical Consultation',
        'Project Planning',
        'Team Collaboration'
      ],
    }
  ];

  const processSteps = [
    { 
      step: '01', 
      title: 'Discovery', 
      description: 'Understanding your goals, requirements, and target audience through detailed consultation',
      icon: <Users size={24} />
    },
    { 
      step: '02', 
      title: 'Design', 
      description: 'Creating wireframes, mockups, and visual designs that align with your brand vision',
      icon: <Palette size={24} />
    },
    { 
      step: '03', 
      title: 'Develop', 
      description: 'Building with clean, efficient code and modern development practices',
      icon: <Code size={24} />
    },
    { 
      step: '04', 
      title: 'Deliver', 
      description: 'Testing, optimization, deployment, and ongoing support for your project',
      icon: <Zap size={24} />
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
            <Zap className="mr-2 text-blue-600" size={16} />
            <span className="text-sm font-medium text-blue-600">What I offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            I offer a comprehensive range of design and development services to bring your ideas to life with creativity and technical excellence
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-5 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500`}></div>
              
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10`}>
                <div className="text-white">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300" style={{backgroundImage: `linear-gradient(to right, ${service.color.split(' ')[1]}, ${service.color.split(' ')[3]})`}}>
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className={`text-lg font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {service.price}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`}></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`group/btn w-full py-3 px-4 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2`}>
                  <span>Get Started</span>
                  <ArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">My Work Process</h3>
            <p className="text-gray-600 text-lg">How I approach every project with precision and care</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={process.step} className="relative text-center group">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-xl rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {process.step}
                </div>
                
                {/* Icon */}
                <div className="inline-flex p-3 bg-gray-100 rounded-xl mb-4 group-hover:bg-blue-50 transition-colors duration-300">
                  <div className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                    {process.icon}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
                
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transform -translate-y-1/2 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with exceptional design and development
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-2xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              <span>Get In Touch</span>
              <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;