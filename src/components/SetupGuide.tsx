import { Download, Wifi, Cable, Settings, CheckCircle, Monitor } from "lucide-react";
import { Card } from "@/components/ui/card";

const SetupGuide = () => {
  const steps = [
    {
      icon: <Download className="w-6 h-6" />,
      step: "01",
      title: "Download Drivers",
      description: "Visit the manufacturer's website and download the latest printer drivers for your operating system.",
      details: [
        "Go to manufacturer support page",
        "Select your printer model",
        "Choose your OS (Windows/Mac/Linux)",
        "Download the driver package",
      ],
    },
    {
      icon: <Cable className="w-6 h-6" />,
      step: "02",
      title: "Connect Printer",
      description: "Connect your printer to the computer using USB cable or set up wireless connection.",
      details: [
        "For USB: Connect cable to PC & printer",
        "For Wireless: Enable WiFi on printer",
        "Press WPS button if available",
        "Wait for connection confirmation",
      ],
    },
    {
      icon: <Settings className="w-6 h-6" />,
      step: "03",
      title: "Install Software",
      description: "Run the downloaded driver installer and follow the on-screen setup wizard.",
      details: [
        "Run the installer file",
        "Accept license agreement",
        "Choose installation type",
        "Complete the wizard",
      ],
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      step: "04",
      title: "Configure Network",
      description: "For wireless printers, connect to your home or office WiFi network.",
      details: [
        "Access printer control panel",
        "Go to Network Settings",
        "Select your WiFi network",
        "Enter WiFi password",
      ],
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      step: "05",
      title: "Add to System",
      description: "Add the printer to your computer's list of available printers.",
      details: [
        "Open Settings > Devices > Printers",
        "Click 'Add Printer'",
        "Select your printer from list",
        "Set as default if needed",
      ],
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      step: "06",
      title: "Test Print",
      description: "Print a test page to verify everything is working correctly.",
      details: [
        "Right-click on printer",
        "Select 'Print Test Page'",
        "Check print quality",
        "Setup complete!",
      ],
    },
  ];

  return (
    <section id="setup" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium text-sm mb-4 bg-primary/10 px-4 py-2 rounded-full">
            Step-by-Step Guide
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How to Setup Your Printer
          </h2>
          <p className="text-muted-foreground text-lg">
            Follow these simple steps to install and configure your printer on any computer.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="group relative p-6 gradient-card border border-border hover:shadow-hover transition-all duration-300 overflow-hidden"
            >
              {/* Step number background */}
              <div className="absolute -top-4 -right-4 text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                {step.step}
              </div>
              
              {/* Icon */}
              <div className="relative w-14 h-14 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground mb-6 shadow-card group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              
              {/* Content */}
              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                    STEP {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {step.description}
                </p>
                
                {/* Details list */}
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SetupGuide;
