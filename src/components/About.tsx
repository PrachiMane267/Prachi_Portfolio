import React from 'react';
import { GraduationCap, MapPin, Calendar, Award, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
            <Heart className="mr-2 text-purple-600" size={16} />
            <span className="text-sm font-medium text-purple-600">Get to know me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover my journey, passion, and aspirations in the world of technology and design
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-96 h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/Prachi.jpg"
                  alt="Prachi Sanjaykumar Mane"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -z-10 top-6 left-6 w-full h-full bg-gradient-to-r from-blue-200/50 to-purple-200/50 rounded-3xl"></div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-xl animate-float">
                <Target className="text-blue-600" size={24} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">My Story</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  I'm a passionate Engineering student in the computer field with a huge interest in UI design. 
                  I've had the opportunity to intern at <span className="font-semibold text-blue-600">CodexSlinger</span>, 
                  a startup, where I honed my skills and gained valuable real-world experience.
                </p>
                <p>
                  I'm always looking to grow my skills and connect with the world. I bring confidence, 
                  adaptability, and a passion for problem-solving to everything I do. My goal is to create 
                  meaningful digital experiences that make a difference in people's lives.
                </p>
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 border border-blue-100/50 shadow-lg">
              <div className="flex items-start space-x-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl shadow-lg">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Education</h4>
                  <p className="text-gray-800 font-semibold text-lg mb-3">B.E. in Computer Engineering</p>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} className="text-blue-600" />
                      <span>Indira College of Engineering and Management, Pune (SPPU)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} className="text-purple-600" />
                      <span>Graduating: 2026</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  6+
                </div>
                <div className="text-gray-600 font-medium">Projects</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  1
                </div>
                <div className="text-gray-600 font-medium">Internship</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-2">
                  2026
                </div>
                <div className="text-gray-600 font-medium">Graduate</div>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Award size={20} />, title: 'Problem Solver', color: 'from-blue-500 to-purple-500' },
                { icon: <Target size={20} />, title: 'Quick Learner', color: 'from-purple-500 to-pink-500' },
                { icon: <Heart size={20} />, title: 'Passionate', color: 'from-pink-500 to-orange-500' },
                { icon: <GraduationCap size={20} />, title: 'Adaptable', color: 'from-orange-500 to-red-500' }
              ].map((value, index) => (
                <div key={value.title} className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${value.color}`}>
                    <div className="text-white">{value.icon}</div>
                  </div>
                  <span className="font-medium text-gray-700">{value.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;