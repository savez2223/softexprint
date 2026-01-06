import { Printer, Heart } from "lucide-react";

const Footer = () => {
  const links = {
    guides: [
      "USB Setup",
      "Wireless Setup",
      "Network Printing",
      "Mobile Printing",
    ],
    support: [
      "Troubleshooting",
      "FAQ",
      "Contact Us",
      "Community Forum",
    ],
    resources: [
      "Video Tutorials",
      "Documentation",
      "Glossary",
      "Best Practices",
    ],
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Printer className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">PrinterHelp</span>
            </a>
            <p className="text-background/70 text-sm leading-relaxed">
              Your comprehensive educational resource for printer setup, configuration, and troubleshooting. Learn at your own pace.
            </p>
          </div>

          {/* Setup Guides */}
          <div>
            <h4 className="font-semibold mb-4">Setup Guides</h4>
            <ul className="space-y-2">
              {links.guides.map((link, index) => (
                <li key={index}>
                  <a href="#setup" className="text-background/70 hover:text-background transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {links.support.map((link, index) => (
                <li key={index}>
                  <a href="#support" className="text-background/70 hover:text-background transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/70 text-sm">
            © 2024 PrinterHelp. Educational purposes only.
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
