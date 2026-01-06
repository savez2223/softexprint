import { Mail, MessageCircle, Book, Video } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Support = () => {
  const resources = [
    {
      icon: <Book className="w-6 h-6" />,
      title: "Documentation",
      description: "Detailed guides and tutorials",
      action: "Browse Docs",
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      action: "Watch Videos",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Community Forum",
      description: "Get help from other users",
      action: "Join Forum",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "Contact our support team",
      action: "Send Email",
    },
  ];

  return (
    <section id="support" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium text-sm mb-4 bg-primary/10 px-4 py-2 rounded-full">
            Get Help
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Need More Help?
          </h2>
          <p className="text-muted-foreground text-lg">
            Our resources and support team are here to help you with any printer-related questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Helpful Resources</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {resources.map((resource, index) => (
                <Card
                  key={index}
                  className="p-5 bg-card border border-border hover:shadow-card transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 transition-transform">
                    {resource.icon}
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{resource.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                  <span className="text-sm font-medium text-primary">{resource.action} →</span>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Send Us a Message</h3>
            <Card className="p-6 bg-card border border-border">
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Your Name
                    </label>
                    <Input
                      placeholder="Enter your name"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Printer Model (Optional)
                  </label>
                  <Input
                    placeholder="e.g., LaserJet Pro M404"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Your Question
                  </label>
                  <Textarea
                    placeholder="Describe your issue or question..."
                    rows={4}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button className="w-full gradient-primary text-primary-foreground shadow-card hover:shadow-hover transition-all duration-300">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
