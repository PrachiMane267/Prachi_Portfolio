import React from 'react';
import { Heart, Mail, Linkedin, Github, ArrowUp, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg">
                <Sparkles className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Prachi Mane
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg max-w-md">
              Passionate Computer Engineering student creating beautiful digital experiences 
              through thoughtful design and clean code. Always ready to turn ideas into reality.
            </p>
            <div className="flex space-x-4">
            {/* Email Icon with mailto link */}
            <a
              href="mailto:prachisanjaykumarmane@gmail.com"
              className="group p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-pink-600 transition-all duration-300 border border-gray-700 hover:border-pink-500"
            >
              <Mail className="group-hover:scale-110 transition-transform duration-300" size={20} />
            </a>

            {/* LinkedIn with full HTTPS URL */}
            <a
              href="https://www.linkedin.com/in/prachimane04"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-blue-600 transition-all duration-300 border border-gray-700 hover:border-blue-500"
            >
              <Linkedin className="group-hover:scale-110 transition-transform duration-300" size={20} />
            </a>

            {/* GitHub with correct profile link */}
            <a
              href="https://github.com/PrachiMane267"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-600 transition-all duration-300 border border-gray-700 hover:border-gray-500"
            >
              <Github className="group-hover:scale-110 transition-transform duration-300" size={20} />
            </a>
          </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200 flex items-center space-x-2 group"
                  >
                    <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all duration-200"></div>
                    <span>{item}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                <span>UI/UX Design</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
                <span>Web Development</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                <span>Mobile Design</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                <span>Figma Prototyping</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                <span>Consultation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Prachi Sanjaykumar Mane. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <p className="text-gray-400 text-sm flex items-center">
                Made with <Heart className="mx-1 text-pink-500 animate-pulse" size={16} /> and lots of code
              </p>
              <button
                onClick={scrollToTop}
                className="group p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                <ArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;