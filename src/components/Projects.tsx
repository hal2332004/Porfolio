import React from 'react';
import { ExternalLink, Github, Brain, Zap, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Document Analysis System",
      description: "Advanced NLP system for intelligent document processing and analysis using transformer models and custom ML pipelines.",
      technologies: ["Python", "FastAPI", "TensorFlow", "React", "PostgreSQL"],
      features: ["Document Classification", "Entity Extraction", "Sentiment Analysis", "Real-time Processing"],
      icon: <Brain className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Real-time ML Model Serving Platform",
      description: "Scalable microservices platform for deploying and serving machine learning models with automatic scaling and monitoring.",
      technologies: ["FastAPI", "Docker", "Kubernetes", "Redis", "React"],
      features: ["Auto-scaling", "Model Versioning", "Performance Monitoring", "A/B Testing"],
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-cyan-500 to-blue-500",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Intelligent Data Visualization Dashboard",
      description: "Interactive dashboard for complex data analysis with AI-powered insights and automated report generation.",
      technologies: ["React", "TypeScript", "D3.js", "Python", "FastAPI"],
      features: ["Interactive Charts", "AI Insights", "Export Functions", "Real-time Updates"],
      icon: <Database className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-500",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mb-4"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Showcasing innovative AI solutions and full-stack applications
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.gradient} p-6`}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-white">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-6">
                <p className="text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm font-medium hover:bg-cyan-600 hover:text-white transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex space-x-4 pt-4">
                  <a
                    href={project.demoUrl}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-teal-600 transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 px-4 py-2 border border-slate-600 text-slate-300 rounded-lg font-medium hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 border border-slate-600 text-slate-300 rounded-full font-medium hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;