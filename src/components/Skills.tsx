import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Briefcase, Code, Lightbulb } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Business & Management",
      icon: Briefcase,
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "Entrepreneurship", level: 85 },
        { name: "Business Operations", level: 90 },
        { name: "Marketing Strategy", level: 80 },
        { name: "Project Management", level: 75 },
        { name: "Team Leadership", level: 85 },
        { name: "Customer Relations", level: 95 }
      ]
    },
    {
      title: "Computer & Tech Skills", 
      icon: Code,
      color: "from-green-500 to-green-600",
      skills: [
        { name: "Microsoft Office Suite", level: 90 },
        { name: "HTML & Web Design", level: 75 },
        { name: "Python Programming", level: 70 },
        { name: "QBASIC & C", level: 65 },
        { name: "Algorithms & Logic", level: 70 },
        { name: "Data Analysis", level: 75 }
      ]
    },
    {
      title: "Personal & Soft Skills",
      icon: Lightbulb, 
      color: "from-purple-500 to-purple-600",
      skills: [
        { name: "Quick Learning", level: 95 },
        { name: "Problem Solving", level: 90 },
        { name: "Communication", level: 95 },
        { name: "Adaptability", level: 90 },
        { name: "Critical Thinking", level: 85 },
        { name: "Negotiation", level: 80 }
      ]
    }
  ];

  const languages = [
    { name: "Nepali", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Korean", level: "Learning" },
    { name: "Hindi", level: "Conversational" }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse skill set combining business acumen with technical proficiency
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="p-6 border-2 hover:border-accent/50 transition-all duration-300 bg-gradient-to-br from-cream to-warm-beige"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-warm-beige"
                      />
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Languages & Additional Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Languages */}
          <Card className="p-6 border-2 hover:border-accent/50 transition-colors duration-300">
            <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-2">
              🌍 Languages
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-cream rounded-lg">
                  <span className="font-medium text-foreground">{lang.name}</span>
                  <Badge 
                    variant="secondary"
                    className="bg-soft-orange/20 text-accent"
                  >
                    {lang.level}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>

          {/* Core Competencies */}
          <Card className="p-6 border-2 hover:border-accent/50 transition-colors duration-300">
            <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-2">
              💫 Core Competencies
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-cream rounded-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-accent to-soft-orange rounded-full"></div>
                <span className="text-foreground">Tech-Savvy Problem Solver</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-cream rounded-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-accent to-soft-orange rounded-full"></div>
                <span className="text-foreground">Cross-Cultural Communication</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-cream rounded-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-accent to-soft-orange rounded-full"></div>
                <span className="text-foreground">Strategic Business Thinking</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-cream rounded-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-accent to-soft-orange rounded-full"></div>
                <span className="text-foreground">Continuous Learning Mindset</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;