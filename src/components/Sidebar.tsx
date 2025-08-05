import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, FileText } from "lucide-react";
import { personalInfo, skills } from "@/data/portfolio";

const Sidebar = () => {
  return (
    <div className="w-full lg:w-80 xl:w-96 sidebar-gradient text-sidebar-text p-8 lg:fixed lg:h-screen lg:overflow-y-auto">
      {/* Profile Section */}
      <div className="text-center mb-8">
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-sidebar-accent shadow-lg">
          <img 
            src={personalInfo.photo} 
            alt={personalInfo.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">{personalInfo.name}</h1>
        <p className="text-sidebar-text text-lg mb-4">{personalInfo.title}</p>
      </div>

      {/* Contact Info */}
      <div className="mb-8">
        <h3 className="text-white font-semibold mb-4 flex items-center">
          <Mail className="w-4 h-4 mr-2" />
          Contact
        </h3>
        <div className="space-y-3">
          <div className="flex items-center text-sm">
            <Mail className="w-4 h-4 mr-3 text-sidebar-accent" />
            <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
              {personalInfo.email}
            </a>
          </div>
          <div className="flex items-center text-sm">
            <Phone className="w-4 h-4 mr-3 text-sidebar-accent" />
            <a href={`tel:${personalInfo.phone}`} className="hover:text-white transition-colors">
              {personalInfo.phone}
            </a>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="w-4 h-4 mr-3 text-sidebar-accent" />
            <span>{personalInfo.location}</span>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3">
          <Button 
            size="sm" 
            className="contact-button text-white px-4 py-2"
            onClick={() => window.open(personalInfo.linkedin, '_blank')}
          >
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
          <Button 
            size="sm" 
            className="contact-button text-white px-4 py-2"
            onClick={() => window.open(personalInfo.github, '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
          <Button 
            size="sm" 
            className="contact-button text-white px-4 py-2"
            onClick={() => window.open(personalInfo.kaggle, '_blank')}
          >
            <FileText className="w-4 h-4 mr-2" />
            Kaggle
          </Button>
          <Button 
            size="sm" 
            className="contact-button text-white px-4 py-2"
            onClick={() => window.open(`mailto:${personalInfo.email}`, '_blank')}
          >
            <Mail className="w-4 h-4 mr-2" />
            Email Me
          </Button>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-white font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="skill-tag text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;