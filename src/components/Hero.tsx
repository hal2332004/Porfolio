import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-orange-500/10 animate-pulse"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            AI Engineer &
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about building intelligent solutions with cutting-edge AI technologies,
            FastAPI, React, and modern web development stack.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={scrollToAbout}
              className="group bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Explore My Work
              <ArrowDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
            
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="p-3 rounded-full border border-slate-600 text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-slate-600 text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-slate-600 text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;