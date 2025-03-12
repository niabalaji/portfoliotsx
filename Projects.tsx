import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Transformer-Based Instructional Text-to-Image Model",
      description: "This model employs transformer-based techniques to transform textbook content into engaging educational videos, simplifying complex information into visually appealing formats for enhanced learning.",
      image: "https://plus.unsplash.com/premium_photo-1661600621838-c77aed0639b6?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Machine Learning", "Python", "Pytorch","Web Scraping"],
      githubLink: "https://github.com/niabalaji/Stable-Diffusion-Image-Gen"
    },
    {
      id: 2,
      title: "EcoConnect: Community connection through Flutter and GeoLocation",
      description: " A Flutter-based Android app designed to foster community engagement and environmental sustainability by connecting neighborhood members, featuring real-time GeoLocation mapping and robust Firebase integration.",
      image: "https://plus.unsplash.com/premium_photo-1667423049497-291580083466?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Mobile", "Flutter", "Firebase",  "Android"],
      githubLink: "https://github.com/niabalaji/Eco_Connect115A"
    },
    {
      id: 3,
      title: "Credit Card Fraud Detection Model",
      description: "Employs sophisticated machine learning techniques to accurately identify and mitigate fraudulent credit card activities, ensuring enhanced transaction security in real-time.",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Backend", "Go", "Databases"],
      githubLink: "https://github.com"
    },
  
  ];
  
  const filters = ['All', 'Frontend', 'Backend', 'Mobile', 'Machine Learning', 'Data Science'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Here are some of the projects I've worked on during my academic journey and personal exploration.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === filter 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white text-slate-700 hover:bg-indigo-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-slate-700 hover:text-indigo-600 transition-colors"
                    >
                      <Github size={18} className="mr-1" />
                      <span>Code</span>
                    </a>
                  )}
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;