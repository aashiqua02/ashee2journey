import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Phone, Instagram, MapPin, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sherpahasheekah002@gmail.com",
      href: "mailto:sherpahasheekah002@gmail.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "010-4636-9379", 
      href: "tel:010-4636-9379",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@asheeee02",
      href: "https://instagram.com/asheeee02",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Busan, South Korea",
      href: null,
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-cream via-warm-beige to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss opportunities, collaborations, or just have a friendly chat? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Get In Touch
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Whether you're interested in my future services, want to discuss business opportunities, 
                or simply want to connect with a fellow student and entrepreneur, I'm always open to meaningful conversations.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                const content = (
                  <Card className="p-6 border-2 hover:border-accent/50 transition-all duration-300 bg-background hover:shadow-lg group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${contact.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-muted-foreground">
                          {contact.label}
                        </p>
                        <p className="text-foreground font-semibold truncate">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  </Card>
                );

                return contact.href ? (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.label === "Instagram" ? "_blank" : undefined}
                    rel={contact.label === "Instagram" ? "noopener noreferrer" : undefined}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary">Quick Actions</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1"
                  onClick={() => window.open('mailto:sherpahasheekah002@gmail.com?subject=Hello%20Ashika!&body=Hi%20Ashika,%0A%0AI%20saw%20your%20portfolio%20and%20would%20love%20to%20connect.%0A%0ABest%20regards,')}
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Email
                </Button>
                <Button 
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground flex-1"
                  onClick={() => window.open('https://instagram.com/asheeee02', '_blank')}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  DM on Instagram
                </Button>
              </div>
            </div>
          </div>

          {/* Call to Action Card */}
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-to-br from-soft-orange/10 to-accent/10 border-accent/30">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-accent to-soft-orange rounded-full flex items-center justify-center">
                  <MessageCircle className="text-white" size={32} />
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-3">
                    Let's Start a Conversation
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I believe in the power of meaningful connections. Whether you're a 
                    fellow student, entrepreneur, or someone interested in collaboration, 
                    I'd love to hear your story and explore how we can support each other's journey.
                  </p>
                </div>

                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Usually responds within 24 hours</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Available for meetings in Korean or English</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Open to networking and mentorship opportunities</span>
                  </div>
                </div>

                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground w-full"
                  onClick={() => window.open('mailto:sherpahasheekah002@gmail.com?subject=Portfolio%20Connection&body=Hi%20Ashika,%0A%0AI%20found%20your%20portfolio%20impressive%20and%20would%20love%20to%20connect.%0A%0A[Tell%20me%20about%20yourself%20and%20what%20you%27d%20like%20to%20discuss]%0A%0ABest%20regards,')}
                >
                  Start Conversation
                </Button>
              </div>
            </Card>

            {/* Availability Notice */}
            <Card className="p-6 bg-background border-2">
              <h4 className="text-lg font-semibold text-primary mb-3">Current Status</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-foreground">Available for new connections</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-foreground">Actively studying at Dong-A University</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-foreground">Planning future service launches</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;