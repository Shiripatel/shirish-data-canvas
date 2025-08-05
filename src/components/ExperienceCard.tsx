import { Calendar, MapPin } from "lucide-react";

interface ExperienceCardProps {
  company: string;
  position: string;
  location: string;
  period: string;
  description: string;
}

const ExperienceCard = ({ company, position, location, period, description }: ExperienceCardProps) => {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-primary/20 last:border-l-0 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0 shadow-lg" />
      
      <div className="project-card p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-1">{position}</h3>
            <h4 className="text-lg font-medium text-primary mb-2">{company}</h4>
          </div>
          <div className="text-sm text-muted-foreground space-y-1">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {period}
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              {location}
            </div>
          </div>
        </div>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;