import React from 'react';
import { Brain, Code, Zap } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Expertise",
      description: "Deep learning, machine learning, and AI model development with practical applications."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "End-to-end development with modern frameworks and best practices."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Building scalable, efficient solutions that handle real-world complexity."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto"></div>
          
          <div className="mt-6">
            <TypeAnimation
              sequence={[
                'Hồ An Lộc',
                1000,
                'AI Engineer',
                1000,
                'Full Stack Developer',
                1000,
                'Hồ An Lộc - AI Engineer & Full Stack Developer',
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              className="text-2xl md:text-3xl font-medium text-cyan-400"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              As an AI Engineer with a passion for innovation, I specialize in developing intelligent 
              solutions that bridge the gap between cutting-edge artificial intelligence and practical 
              business applications. My expertise spans machine learning, deep learning, and modern 
              web development technologies.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              With extensive experience in Python, JavaScript, FastAPI, and React, I create robust, 
              scalable applications that leverage the power of AI to solve complex real-world problems. 
              I'm committed to writing clean, maintainable code and staying at the forefront of 
              technological advancement.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-slate-800 text-cyan-400 rounded-full text-sm font-medium border border-slate-700">
                5+ Years Experience
              </span>
              <span className="px-4 py-2 bg-slate-800 text-orange-400 rounded-full text-sm font-medium border border-slate-700">
                AI Specialist
              </span>
              <span className="px-4 py-2 bg-slate-800 text-teal-400 rounded-full text-sm font-medium border border-slate-700">
                Full Stack Expert
              </span>
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      {highlight.description}
                    </p>
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

export default About;