import React from 'react';
import { ArrowRight, Download, Sparkles, Code, Palette } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-lg animate-pulse"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-32 right-1/4 animate-float">
          <div className="p-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
            <Code className="text-blue-600" size={24} />
          </div>
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float-delayed">
          <div className="p-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
            <Palette className="text-purple-600" size={24} />
          </div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center mb-6 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
              <Sparkles className="mr-2 text-blue-600" size={16} />
              <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Hello, I'm
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-gray-900">Prachi</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x bg-300% leading-tight">
                Sanjaykumar Mane
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
              Engineering Student | Aspiring UI/UX Designer & Web Developer
            </p>
            
            <p className="text-gray-500 mb-8 max-w-2xl leading-relaxed text-lg">
              Final-year Computer Engineering student passionate about creating beautiful, 
              user-centered designs and bringing them to life through clean, efficient code. 
              Always eager to learn and solve problems through technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToProjects}
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">View My Work</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300 relative" size={20} />
              </button>
              
              <a href="/Prachi_Mane04_Resume.pdf"
                download className="group inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-2xl border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50/50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Download className="mr-2 group-hover:animate-bounce" size={20} />
                    Download Resume
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50 backdrop-blur-sm">
                <img
                  src="/PrachiHome.jpg"
                  alt="Prachi Sanjaykumar Mane"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Achievement Badges */}
              <div className="absolute -top-6 -right-6 animate-float">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-xl">
                  <span className="text-white text-2xl">🎨</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 animate-float-delayed">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-xl">
                  <span className="text-white text-2xl">💻</span>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">6+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;