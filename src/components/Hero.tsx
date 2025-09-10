import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import ashikaProfile from "@/assets/ashika-profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-cream to-warm-beige relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-cream/60 to-warm-beige/40" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-soft-orange/20 rounded-full text-sm font-medium text-accent">
              ✨ Available for new opportunities
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
                Hey, I'm{" "}
                <span className="bg-gradient-to-r from-accent to-soft-orange bg-clip-text text-transparent">
                  Ashika
                </span>
              </h1>
              
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground">
                Business Student & Future Entrepreneur
              </h2>
            </div>
            
            <blockquote className="text-lg md:text-xl text-light-text italic border-l-4 border-accent pl-6">
              "I hear and I forget, I see and I remember, I do and I understand."
            </blockquote>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              A passionate business student from Nepal, currently studying at Dong-A University, South Korea. 
              Specialized in business management, technology, and turning visions into reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-xl bg-gradient-to-br from-soft-orange/20 to-accent/20 p-2">
                <img
                  src={ashikaProfile}
                  alt="Ashika Sherpa"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-soft-orange to-accent rounded-full opacity-60 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-accent to-soft-orange rounded-full opacity-40 animate-pulse delay-1000" />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;