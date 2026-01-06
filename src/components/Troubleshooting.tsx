import { AlertTriangle, Wifi, FileX, Palette, Power, HelpCircle, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Troubleshooting = () => {
  const issues = [
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Printer Not Found",
      problem: "Computer can't detect the printer",
      solutions: [
        "Check if printer is powered on",
        "Verify USB cable is connected properly",
        "Restart both computer and printer",
        "Reinstall printer drivers",
      ],
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      icon: <FileX className="w-6 h-6" />,
      title: "Paper Jam",
      problem: "Paper is stuck inside the printer",
      solutions: [
        "Turn off printer and unplug",
        "Open all access doors gently",
        "Remove stuck paper carefully",
        "Check for small paper pieces",
      ],
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Poor Print Quality",
      problem: "Prints are faded or streaky",
      solutions: [
        "Check ink/toner levels",
        "Run printer head cleaning",
        "Align print heads",
        "Use correct paper type",
      ],
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      icon: <Power className="w-6 h-6" />,
      title: "Printer Offline",
      problem: "Printer shows offline status",
      solutions: [
        "Check printer connection",
        "Set as default printer",
        "Clear print queue",
        "Restart print spooler service",
      ],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Driver Issues",
      problem: "Driver not working correctly",
      solutions: [
        "Uninstall current driver",
        "Download latest driver version",
        "Install in compatibility mode",
        "Update operating system",
      ],
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: <HelpCircle className="w-6 h-6" />,
      title: "WiFi Connection Lost",
      problem: "Wireless printer disconnects",
      solutions: [
        "Check router is working",
        "Move printer closer to router",
        "Reconnect to WiFi network",
        "Assign static IP address",
      ],
      color: "text-teal-500",
      bgColor: "bg-teal-500/10",
    },
  ];

  return (
    <section id="troubleshoot" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium text-sm mb-4 bg-primary/10 px-4 py-2 rounded-full">
            Troubleshooting
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Common Printer Problems & Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            Having issues with your printer? Find quick solutions to the most common problems below.
          </p>
        </div>

        {/* Issues Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {issues.map((issue, index) => (
            <Card
              key={index}
              className="group p-6 bg-card border border-border hover:shadow-hover transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${issue.bgColor} flex items-center justify-center ${issue.color} mb-4`}>
                {issue.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-1">
                {issue.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {issue.problem}
              </p>
              
              {/* Solutions */}
              <div className="space-y-2 mb-4">
                {issue.solutions.map((solution, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-primary font-bold text-sm">{i + 1}.</span>
                    <span className="text-sm text-muted-foreground">{solution}</span>
                  </div>
                ))}
              </div>
              
              {/* Learn More Button */}
              <Button variant="ghost" size="sm" className="group/btn text-primary hover:text-primary p-0">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Troubleshooting;
