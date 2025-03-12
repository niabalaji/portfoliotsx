import React from 'react';

interface SkillCategory {
  name: string;
  skills: {
    name: string;
  }[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      skills: [
        { name: "Python" },
        { name: "C/C++" },
        { name: "Java" },
        { name: "JavaScript/TypeScript" },
        { name: "Go" }
      ]
    },
    {
      name: "Web Development",
      skills: [
        { name: "React" },
        { name: "Node.js" },
        { name: "HTML/CSS" },
        { name: "GraphQL" },
        { name: "Next.js" }
      ]
    },
    {
      name: "Tools & Technologies",
      skills: [
        { name: "Git" },
        { name: "Docker" },
        { name: "AWS" },
        { name: "CI/CD" },
        { name: "Databases" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Here's an overview of my technical skills and areas of expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">{category.name}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
