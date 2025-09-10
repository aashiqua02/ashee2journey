import { Mail, Instagram, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Ashika Sherpa</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Business student, entrepreneur, and future innovator passionate about 
              creating meaningful impact through education and technology.
            </p>
            <div className="flex gap-4">
              <a 
                href="mailto:sherpahasheekah002@gmail.com"
                className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-colors"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://instagram.com/asheeee02"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Experience", href: "#experience" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Services", href: "#services" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({
                      behavior: "smooth"
                    });
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <p>📧 sherpahasheekah002@gmail.com</p>
              <p>📱 010-4636-9379</p>
              <p>📍 Busan, South Korea</p>
              <p>🎓 Dong-A University</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <span>Made with</span>
              <Heart className="text-red-400 fill-current" size={16} />
              <span>by Ashika Sherpa</span>
            </div>
            <div className="text-primary-foreground/80 text-sm">
              © 2024 Ashika Sherpa. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;