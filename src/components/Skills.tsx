import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Python", level: 95 },
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 88 },
        { name: "Scikit-learn", level: 92 },
        { name: "OpenAI APIs", level: 85 },
        { name: "Computer Vision", level: 87 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "FastAPI", level: 95 },
        { name: "Django", level: 88 },
        { name: "Node.js", level: 85 },
        { name: "PostgreSQL", level: 90 },
        { name: "Redis", level: 82 },
        { name: "Docker", level: 88 }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 92 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Next.js", level: 85 },
        { name: "Vue.js", level: 80 }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Git", level: 95 },
        { name: "CI/CD", level: 88 },
        { name: "Kubernetes", level: 75 },
        { name: "MongoDB", level: 85 },
        { name: "Linux", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mb-4"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive expertise across the AI and full-stack development landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 font-medium text-sm">
                        {skill.name}
                      </span>
                      <span className="text-cyan-400 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="h-2 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-cyan-400/30"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Additional Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Natural Language Processing", "Deep Learning", "MLOps", "API Design",
                "Microservices", "Cloud Architecture", "Data Analysis", "Model Deployment",
                "REST APIs", "GraphQL", "WebSockets", "Agile Development"
              ].map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-600 text-slate-200 rounded-full text-sm font-medium hover:from-cyan-600 hover:to-teal-600 hover:text-white transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;