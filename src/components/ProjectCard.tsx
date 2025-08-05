import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const ProjectCard = ({ title, description, technologies, link }: ProjectCardProps) => {
  return (
    <div className="project-card p-6 group cursor-pointer transition-all duration-300 hover:scale-105" onClick={() => window.open(link, '_blank')}>
      <div className="relative mb-4">
        <ExternalLink className="absolute top-0 right-0 w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300" />
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