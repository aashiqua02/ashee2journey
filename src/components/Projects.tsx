import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Droplets, Car, Lightbulb, Beaker, FileText } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Waste Water Treatment Plant",
      description: "Designed and developed a comprehensive model for water treatment systems, focusing on sustainable environmental solutions and efficient filtration processes.",
      type: "Environmental Engineering",
      skills: ["Environmental Science", "System Design", "Sustainability", "Research"],
      icon: Droplets,
      color: "from-blue-500 to-cyan-500",
      year: "2023"
    },
    {
      title: "Motor Car Project", 
      description: "Built a functional model car incorporating engineering principles, mechanical design, and basic automation systems for optimal performance.",
      type: "Engineering Design",
      skills: ["Mechanical Engineering", "Design Thinking", "Problem Solving", "Innovation"],
      icon: Car,
      color: "from-red-500 to-orange-500",
      year: "2023"
    },
    {
      title: "Sensor Light Project",
      description: "Developed an automatic lighting system using sensors and programming logic, demonstrating understanding of IoT principles and smart home technology.",
      type: "Technology & IoT",
      skills: ["Electronics", "Programming", "Automation", "IoT"],
      icon: Lightbulb,
      color: "from-yellow-500 to-amber-500",
      year: "2022"
    },
    {
      title: "Science Experiments",
      description: "Conducted various chemistry experiments including coke & baking soda reactions, exploring chemical properties and documenting scientific observations.",
      type: "Scientific Research",
      skills: ["Chemistry", "Scientific Method", "Documentation", "Analysis"],
      icon: Beaker,
      color: "from-green-500 to-emerald-500",
      year: "2022"
    },
    {
      title: "Duck Farming Survey Report",
      description: "Comprehensive research and survey analysis on duck farming practices, market analysis, and business viability in the local agricultural sector.",
      type: "Business Research",
      skills: ["Market Research", "Data Analysis", "Report Writing", "Agricultural Business"],
      icon: FileText,
      color: "from-purple-500 to-violet-500",
      year: "2023"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Projects & Research
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative projects spanning engineering, technology, and business research
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index}
                className="group p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/50 bg-background hover:-translate-y-2"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {project.year}
                  </Badge>
                </div>

                {/* Project Title & Type */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <Badge 
                    variant="secondary"
                    className="bg-soft-orange/20 text-accent text-xs"
                  >
                    {project.type}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">Technologies & Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="secondary"
                        className="bg-warm-beige text-foreground hover:bg-accent/20 transition-colors text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  variant="outline" 
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground group-hover:shadow-lg transition-all duration-300"
                  onClick={() => {
                    // In a real application, this would link to project details or demo
                    console.log(`View ${project.title} project details`);
                  }}
                >
                  View Details
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Projects Summary */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-to-r from-soft-orange/10 to-accent/10 border-accent/30 text-center">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Project Portfolio Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">5+</div>
                <div className="text-sm text-muted-foreground">Completed Projects</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">4</div>
                <div className="text-sm text-muted-foreground">Different Industries</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Skills Applied</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;