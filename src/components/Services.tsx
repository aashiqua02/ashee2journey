import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Code, BookOpen, Users, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Web Design Tutoring",
      description: "Personalized tutoring sessions in web design fundamentals, HTML, CSS, and modern web development practices. Perfect for beginners looking to start their web development journey.",
      features: [
        "One-on-one tutoring sessions",
        "HTML & CSS fundamentals", 
        "Responsive design principles",
        "Project-based learning",
        "Portfolio development guidance"
      ],
      icon: Code,
      color: "from-blue-500 to-blue-600",
      availability: "Available Starting 2024"
    },
    {
      title: "Business Consulting",
      description: "Strategic business consulting services leveraging my diverse industry experience and business education. Helping small businesses and startups with operational strategies.",
      features: [
        "Business strategy development",
        "Market analysis & research",
        "Operations optimization",
        "Customer service strategies",
        "Digital transformation guidance"
      ],
      icon: Users,
      color: "from-green-500 to-green-600", 
      availability: "Available Starting 2025"
    },
    {
      title: "Educational Content Creation",
      description: "Creating educational materials and content for business and technology topics, drawing from real-world experience and academic knowledge.",
      features: [
        "Business case studies",
        "Technology tutorials",
        "Korean language learning content",
        "Cross-cultural business guides",
        "Student mentorship programs"
      ],
      icon: BookOpen,
      color: "from-purple-500 to-purple-600",
      availability: "Planning Phase"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Future Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building on my education and experience to offer valuable services in the near future
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="p-8 border-2 hover:border-accent/50 transition-all duration-300 bg-gradient-to-br from-cream to-warm-beige hover:shadow-lg group"
              >
                {/* Service Header */}
                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${service.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">
                    {service.title}
                  </h3>
                  <div className="inline-block px-3 py-1 bg-soft-orange/20 text-accent text-sm font-medium rounded-full">
                    {service.availability}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed text-center">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-accent to-soft-orange rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Button 
                  variant="outline" 
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Notified
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <Card className="p-8 bg-gradient-to-r from-accent/10 to-soft-orange/10 border-accent/30 text-center">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Interested in Future Collaboration?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm continuously developing these service offerings while completing my education. 
            Get in touch to discuss your needs and be among the first to know when these services become available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              onClick={() => {
                // In a real application, this would open an email signup form
                alert("Email notification signup coming soon!");
              }}
            >
              Join Waitlist
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Services;