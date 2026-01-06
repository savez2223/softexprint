import { Printer, Heart, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = {
    tutorials: [
      { name: "USB Printer Setup", href: "/#setup" },
      { name: "Wireless Configuration", href: "/#setup" },
      { name: "Network Printing", href: "/#setup" },
      { name: "Mobile Printing", href: "/#setup" },
    ],
    learning: [
      { name: "Beginner Guide", href: "/#resources" },
      { name: "Video Tutorials", href: "/#resources" },
      { name: "FAQ Section", href: "/#faq" },
      { name: "Quick Reference", href: "/#resources" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms-conditions" },
      { name: "Contact Us", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Printer className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">Softexprint</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Your comprehensive educational resource for learning printer setup, configuration, and maintenance. Free tutorials for students and beginners.
            </p>
            <div className="flex items-center gap-2 text-sm text-background/70 mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>Educational Purpose Only</span>
            </div>
            <p className="text-xs text-background/50">
              We do NOT provide third-party tech support.
            </p>
          </div>

          {/* Tutorials */}
          <nav aria-label="Tutorials">
            <h4 className="font-semibold mb-4">Tutorials</h4>
            <ul className="space-y-2">
              {links.tutorials.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-background/70 hover:text-background transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Learning */}
          <nav aria-label="Learning">
            <h4 className="font-semibold mb-4">Learning</h4>
            <ul className="space-y-2">
              {links.learning.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-background/70 hover:text-background transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal">
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-background/70 hover:text-background transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/70 text-sm">
            © 2024 PrinterHelp. Free educational resource for learning.
          </p>
          <p className="text-background/70 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> for students and learners
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
