import { Wifi, FileX, Palette, Power, Zap, Settings, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CommonSolutions = () => {
  const solutions = [
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Printer Not Detected",
      problem: "Learn why your computer cannot find the printer",
      solutions: [
        "Verify printer is powered on properly",
        "Check USB cable connection at both ends",
        "Restart computer and printer together",
        "Reinstall or update printer drivers",
      ],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: <FileX className="w-6 h-6" />,
      title: "Paper Jam Prevention",
      problem: "Understand how to handle stuck paper safely",
      solutions: [
        "Turn off and unplug printer first",
        "Open all access panels gently",
        "Pull paper in direction of paper path",
        "Check for torn paper pieces inside",
      ],
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Print Quality Issues",
      problem: "Fix faded, streaky, or blurry prints",
      solutions: [
        "Check ink or toner cartridge levels",
        "Run print head cleaning utility",
        "Perform print head alignment",
        "Use correct paper type settings",
      ],
      color: "text-yellow-600",
      bgColor: "bg-yellow-500/10",
    },
    {
      icon: <Power className="w-6 h-6" />,
      title: "Printer Shows Offline",
      problem: "Learn to bring offline printer back online",
      solutions: [
        "Check physical connection status",
        "Set printer as default device",
        "Clear pending print jobs queue",
        "Restart print spooler service",
      ],
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Slow Printing Speed",
      problem: "Improve printer performance and speed",
      solutions: [
        "Select draft mode for faster prints",
        "Reduce print resolution settings",
        "Clear print queue regularly",
        "Update to latest driver version",
      ],
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "WiFi Connection Issues",
      problem: "Fix wireless printer connectivity problems",
      solutions: [
        "Ensure router is working properly",
        "Move printer closer to WiFi router",
        "Reconnect to WiFi network again",
        "Consider using static IP address",
      ],
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium text-sm mb-4 bg-primary/10 px-4 py-2 rounded-full">
            Problem Solving Guide
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Common Printer Issues & Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            Learn how to identify and resolve the most common printer problems with our easy-to-follow educational guides.
          </p>
        </header>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, index) => (
            <Card
              key={index}
              className="group p-6 bg-card border border-border hover:shadow-hover transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center ${item.color} mb-4`}>
                {item.icon}
              </div>
              
              {/* Content */}
              <article>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.problem}
                </p>
                
                {/* Solutions */}
                <ul className="space-y-2 mb-4">
                  {item.solutions.map((solution, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary font-bold text-sm">{i + 1}.</span>
                      <span className="text-sm text-muted-foreground">{solution}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Learn More Button */}
                <Button variant="ghost" size="sm" className="group/btn text-primary hover:text-primary p-0">
                  Read Full Guide
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </article>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommonSolutions;
