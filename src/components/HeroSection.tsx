import { ArrowRight, CheckCircle2, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const features = [
    "Step-by-step installation tutorials",
    "Wireless & USB connection guides",
    "Beginner-friendly explanations",
  ];

  return (
    <section id="home" className="min-h-screen gradient-hero pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-10rem)]">
          {/* Left Content */}
          <article className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <GraduationCap className="w-4 h-4" />
              Free Educational Resource
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Learn{" "}
              <span className="text-gradient">Printer Setup</span>
              {" "}Step by Step
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Master printer installation, configuration, and maintenance with our comprehensive educational guides. Designed for students, teachers, and IT beginners who want to learn at their own pace.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-primary text-primary-foreground shadow-card hover:shadow-hover transition-all duration-300 group">
                Start Learning Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 hover:bg-secondary transition-colors">
                Watch Video Tutorial
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </article>

          {/* Right Content - Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Background decoration */}
              <div className="absolute inset-0 gradient-primary opacity-20 blur-3xl rounded-full scale-110"></div>
              
              {/* Main printer illustration card */}
              <div className="relative bg-card rounded-3xl p-8 shadow-card border border-border animate-float">
                <div className="aspect-square bg-secondary rounded-2xl flex items-center justify-center mb-6">
                  <svg viewBox="0 0 200 200" className="w-full h-full p-8" aria-label="Printer illustration">
                    {/* Printer Body */}
                    <rect x="30" y="70" width="140" height="80" rx="8" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2"/>
                    {/* Paper Tray */}
                    <rect x="40" y="150" width="120" height="30" rx="4" fill="hsl(var(--secondary))" stroke="hsl(var(--border))" strokeWidth="2"/>
                    {/* Top Cover */}
                    <rect x="35" y="60" width="130" height="15" rx="4" fill="hsl(var(--primary))" />
                    {/* Display Screen */}
                    <rect x="50" y="85" width="50" height="30" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1"/>
                    {/* Buttons */}
                    <circle cx="130" cy="100" r="8" fill="hsl(var(--accent))"/>
                    <circle cx="155" cy="100" r="8" fill="hsl(var(--muted-foreground))"/>
                    {/* Paper Output */}
                    <rect x="60" y="40" width="80" height="25" rx="2" fill="white" stroke="hsl(var(--border))" strokeWidth="1"/>
                    <line x1="70" y1="48" x2="130" y2="48" stroke="hsl(var(--muted-foreground))" strokeWidth="1" opacity="0.5"/>
                    <line x1="70" y1="54" x2="120" y2="54" stroke="hsl(var(--muted-foreground))" strokeWidth="1" opacity="0.5"/>
                  </svg>
                </div>
                
                {/* Status indicators */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">Ready to Print</span>
                  </div>
                  <div className="text-sm font-medium text-primary">100%</div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-card px-4 py-2 rounded-xl shadow-soft border border-border">
                <span className="text-sm font-medium text-foreground">✨ Easy to Learn</span>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card px-4 py-2 rounded-xl shadow-soft border border-border">
                <span className="text-sm font-medium text-foreground">🎓 100% Free</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
