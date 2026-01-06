import { Book, Video, FileText, Download, GraduationCap, Bookmark } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const resources = [
    {
      icon: <Book className="w-6 h-6" />,
      title: "Beginner Guide",
      description: "Start with the basics of printer technology",
      items: ["Understanding printer types", "Inkjet vs Laser explained", "Choosing the right printer"],
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Tutorials",
      description: "Watch step-by-step visual guides",
      items: ["USB setup walkthrough", "WiFi configuration demo", "Print quality optimization"],
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Quick Reference",
      description: "Printable cheat sheets and guides",
      items: ["Setup checklist PDF", "Error code reference", "Maintenance schedule"],
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Driver Guides",
      description: "OS-specific installation tutorials",
      items: ["Windows 10/11 guide", "macOS installation", "Linux driver setup"],
    },
  ];

  const topics = [
    { title: "Printer Types Explained", category: "Basics" },
    { title: "Network Printing Setup", category: "Advanced" },
    { title: "Mobile Printing Guide", category: "Modern" },
    { title: "Print Server Configuration", category: "Enterprise" },
    { title: "Eco-Friendly Printing Tips", category: "Green" },
    { title: "Printer Security Best Practices", category: "Security" },
  ];

  return (
    <section id="resources" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium text-sm mb-4 bg-primary/10 px-4 py-2 rounded-full">
            Learning Materials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Educational Resources
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our collection of free learning materials designed to help you master printer setup and maintenance.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Resources Cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <Card
                key={index}
                className="p-6 bg-card border border-border hover:shadow-card transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 transition-transform">
                  {resource.icon}
                </div>
                <h3 className="font-bold text-foreground mb-2">{resource.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                <ul className="space-y-2">
                  {resource.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <Bookmark className="w-3 h-3 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Topics Sidebar */}
          <div>
            <Card className="p-6 bg-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-foreground">Popular Topics</h3>
              </div>
              
              <ul className="space-y-3 mb-6">
                {topics.map((topic, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary transition-colors group"
                    >
                      <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                        {topic.title}
                      </span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {topic.category}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              
              <Button className="w-full gradient-primary text-primary-foreground">
                View All Topics
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
