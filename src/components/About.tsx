import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { BookOpen, MapPin, Heart } from "lucide-react";

const About = () => {
  const interests = [
    "Writing Poems", "Reading Books", "Traveling", "Hiking", 
    "Bike Racing", "Learning Korean", "Programming", "AI Conversations"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate learner with big dreams and the determination to make them reality
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-foreground leading-relaxed">
                Hello! I'm Ashika Sherpa, a driven business student originally from the beautiful landscapes of Nepal, 
                now pursuing my dreams in Busan, South Korea. My journey has been one of continuous growth, 
                learning, and embracing new challenges.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently in my 2nd semester of Integrated Business Management at Dong-A University, 
                I'm passionate about entrepreneurship, technology, and creating meaningful impact through business innovation. 
                My diverse background has shaped my unique perspective on problem-solving and strategic thinking.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond academics, I believe in the power of hands-on experience. From assisting in family business 
                operations to tutoring and exploring various industries, I've developed a well-rounded skill set 
                that combines traditional business acumen with modern technological understanding.
              </p>
            </div>

            {/* Interests */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-lg font-semibold text-primary">
                <Heart className="text-accent" size={20} />
                Interests & Hobbies
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <Badge 
                    key={interest} 
                    variant="secondary"
                    className="bg-soft-orange/20 text-accent hover:bg-soft-orange/30 transition-colors"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Education Cards */}
          <div className="space-y-6">
            <Card className="p-6 border-2 hover:border-accent/50 transition-colors duration-300 bg-gradient-to-br from-cream to-warm-beige">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <BookOpen className="text-accent" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Bachelor's in Business
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Integrated Business Management
                  </p>
                  <div className="flex items-center gap-2 text-sm text-light-text">
                    <MapPin size={16} />
                    Dong-A University, Busan, South Korea
                  </div>
                  <p className="text-sm text-accent font-medium mt-2">
                    Currently 2nd Semester • Expected Graduation 2027
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 hover:border-accent/50 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <BookOpen className="text-accent" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    High School Diploma
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Science Faculty
                  </p>
                  <div className="flex items-center gap-2 text-sm text-light-text">
                    <MapPin size={16} />
                    Pokhara, Nepal
                  </div>
                  <p className="text-sm text-accent font-medium mt-2">
                    Graduated 2023
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;