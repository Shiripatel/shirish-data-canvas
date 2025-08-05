import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

const ProjectCard = ({ title, description, image, technologies, link }: ProjectCardProps) => {
  return (
    <div className="project-card p-6 group cursor-pointer" onClick={() => window.open(link, '_blank')}>
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <ExternalLink className="absolute top-3 right-3 w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0" />
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <Badge 
            key={index} 
            variant="secondary" 
            className="text-xs px-2 py-1 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;