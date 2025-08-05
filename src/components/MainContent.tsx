import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, User } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import { about, projects, experience, education, awards } from "@/data/portfolio";

const MainContent = () => {
  return (
    <div className="flex-1 lg:ml-80 xl:ml-96 p-8 bg-background min-h-screen">
      {/* About Section */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <User className="w-6 h-6 mr-3 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">About</h2>
        </div>
        <Card className="project-card">
          <CardContent className="p-8">
            <p className="text-muted-foreground leading-relaxed text-lg">
              {about.text}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Projects Section */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <div className="w-6 h-6 mr-3 bg-primary rounded flex items-center justify-center">
            <span className="text-white text-sm font-bold">🧩</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground">Featured Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <div className="w-6 h-6 mr-3 bg-primary rounded flex items-center justify-center">
            <span className="text-white text-sm font-bold">💼</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground">Professional Experience</h2>
        </div>
        <div className="space-y-0">
          {experience.map((exp) => (
            <ExperienceCard
              key={exp.id}
              company={exp.company}
              position={exp.position}
              location={exp.location}
              period={exp.period}
              description={exp.description}
            />
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <GraduationCap className="w-6 h-6 mr-3 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">Education</h2>
        </div>
        <div className="space-y-4">
          {education.map((edu) => (
            <Card key={edu.id} className="project-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{edu.degree}</h3>
                <h4 className="text-lg font-medium text-primary mb-2">{edu.institution}</h4>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{edu.period}</span>
                  {edu.note && (
                    <Badge variant="secondary" className="bg-accent/20 text-accent">
                      {edu.note}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Awards Section */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <Award className="w-6 h-6 mr-3 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">Awards & Recognition</h2>
        </div>
        <Card className="project-card">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {awards.map((award, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{award}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default MainContent;