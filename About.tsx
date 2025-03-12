import React from 'react';
import { Globe, Monitor, Camera, Briefcase } from 'lucide-react';
interface ExperienceEntryProps {
  imgSrc: string;
  title: string;
  dates: string;
  link: string;
  linkText: string;
}
const ProfessionalLayout = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-8 md:px-10 flex justify-between items-start">

        {/* Introductory Text Box */}
        <div className="w-1/2 bg-blue-100 rounded-lg p-6 shadow-lg">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Welcome!</h2>
          <p className="text-xl">
         I’m a technology enthusiast with a keen interest in everything from computer hardware to game development and gameplay. My passion for technology extends to building practical applications and learning new programming skills that push the limits of what I can create and achieve.☺️
          </p>
        </div>

        {/* Work Experience Section */}
        <div className="w-1/2 ml-20">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Work Experience</h2>
          <div className="flex flex-col space-y-4">
            <ExperienceEntry
              imgSrc="img/keysight.webp"
              title="Keysight Technologies - Systems Engineer"
              dates="Nov 2024 - Feb 25"
              link="https://www.keysight.com/us/en/home.html"
              linkText="keysight.com"
            />
            <ExperienceEntry
              imgSrc="img/medicon.webp"
              title="medRxiv - Machine Learning Engineer"
              dates="June 2024 - Nov 2024"
              link="https://www.medrxiv.org/"
              linkText="medRxiv.com"
            />
            <ExperienceEntry
              imgSrc="img/kapitusicon.jpg"
              title="Kapitus - Software Engineer Intern"
              dates="Nov 2023 - June 2024"
              link="https://kapitus.com/"
              linkText="kapitus.com"
            />
            <ExperienceEntry
              imgSrc="img/veniceicon.avif"
              title="Venice Industries - Software Developer"
              dates="June 2023 - Oct 2023"
              link="https://www.venice-inc.com/"
              linkText="venice.com"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

const ExperienceEntry: React.FC<ExperienceEntryProps> = ({ imgSrc, title, dates, link, linkText }) => {
  return (
    <div className="flex items-center space-x-4">
      <img src={imgSrc} alt="Company Logo" className="h-20 w-20 object-cover rounded-full" />
      <div className="flex-1">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm">{dates}</p>
        <a href={link} className="text-blue-500 text-sm hover:underline">{linkText}</a>
      </div>
    </div>
  );
};

export default ProfessionalLayout;
