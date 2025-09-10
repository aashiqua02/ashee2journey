import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Users, Scissors, ShoppingBag } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Family Business Assistant",
      company: "Grocery & Restaurant Business",
      location: "Nepal",
      description: "Assisted in daily operations, inventory management, and customer service. Developed strong communication skills and learned the fundamentals of business operations from ground up.",
      skills: ["Business Operations", "Customer Service", "Inventory Management", "Communication"],
      icon: Briefcase,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Part-time Teacher & Home Tutor",
      company: "Independent Tutoring",
      location: "Nepal",
      description: "Provided personalized educational support to students of various age groups. Developed teaching methodologies and enhanced my ability to explain complex concepts clearly.",
      skills: ["Teaching", "Communication", "Patience", "Adaptability"],
      icon: Users,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Beauty Salon & Nail Technician Trainee",
      company: "Beauty Industry",
      location: "Nepal",
      description: "Learned technical skills in beauty services and nail art. Gained experience in customer consultation and service delivery in a specialized field.",
      skills: ["Technical Skills", "Attention to Detail", "Customer Consultation", "Creativity"],
      icon: Scissors,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Sales Girl & Store Manager",
      company: "Clothing Store",
      location: "Nepal",
      description: "Progressed from sales associate to store management role. Developed negotiation skills, marketing strategies, and team leadership capabilities.",
      skills: ["Sales", "Marketing", "Leadership", "Negotiation", "Team Management"],
      icon: ShoppingBag,
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Experience & Background
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse journey across multiple industries that shaped my business perspective
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/50 bg-background"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${exp.color} text-white`}>
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-accent font-medium mb-1">{exp.company}</p>
                    <p className="text-sm text-light-text">{exp.location}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-primary">Key Skills Developed:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="secondary"
                        className="bg-soft-orange/20 text-accent hover:bg-soft-orange/30 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Summary */}
        <div className="mt-12 text-center">
          <Card className="p-8 bg-gradient-to-r from-soft-orange/10 to-accent/10 border-accent/30">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Key Takeaways from My Journey
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Through diverse experiences across multiple industries, I've developed a unique blend of 
              <span className="text-accent font-semibold"> technical skills</span>, 
              <span className="text-accent font-semibold"> business acumen</span>, and 
              <span className="text-accent font-semibold"> leadership capabilities</span>. 
              Each role taught me valuable lessons about customer service, team management, 
              and the importance of adaptability in today's dynamic business environment.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;