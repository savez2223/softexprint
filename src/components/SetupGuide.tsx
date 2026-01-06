import { Download, Wifi, Cable, Settings, CheckCircle, Monitor } from "lucide-react";
import { Card } from "@/components/ui/card";

const SetupGuide = () => {
  const steps = [
    {
      icon: <Download className="w-6 h-6" />,
      step: "01",
      title: "Download Printer Drivers",
      description: "Learn how to find and download the correct printer drivers from the manufacturer website for your operating system.",
      details: [
        "Visit manufacturer official website",
        "Navigate to drivers/downloads section",
        "Select your printer model number",
        "Choose your OS (Windows/Mac/Linux)",
      ],
    },
    {
      icon: <Cable className="w-6 h-6" />,
      step: "02",
      title: "Connect Your Printer",
      description: "Understand how to physically connect your printer using USB cable or prepare for wireless setup.",
      details: [
        "USB: Connect cable to PC and printer",
        "Wireless: Power on and enable WiFi mode",
        "Locate the WPS button on printer",
        "Ensure printer shows connection light",
      ],
    },
    {
      icon: <Settings className="w-6 h-6" />,
      step: "03",
      title: "Install Driver Software",
      description: "Step-by-step process to run the driver installer and complete the software installation wizard.",
      details: [
        "Run the downloaded installer file",
        "Accept the license agreement",
        "Select installation type (typical/custom)",
        "Follow on-screen instructions",
      ],
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      step: "04",
      title: "Configure Network Settings",
      description: "Learn to connect wireless printers to your home or office WiFi network for remote printing.",
      details: [
        "Access printer control panel menu",
        "Navigate to Network/WiFi Settings",
        "Search and select your network",
        "Enter WiFi password correctly",
      ],
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      step: "05",
      title: "Add Printer to Computer",
      description: "How to add the installed printer to your computer system for easy access and printing.",
      details: [
        "Open Settings > Devices > Printers",
        "Click Add a Printer option",
        "Select your printer from the list",
        "Set as default printer if needed",
      ],
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      step: "06",
      title: "Print a Test Page",
      description: "Verify your printer setup by printing a test page to ensure everything works correctly.",
      details: [
        "Right-click on your printer icon",
        "Select Print Test Page option",
        "Check print quality and alignment",
        "Installation complete!",
      ],
    },
  ];

  return (
    <section id="setup" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium text-sm mb-4 bg-primary/10 px-4 py-2 rounded-full">
            Complete Tutorial
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How to Install a Printer: Complete Guide
          </h2>
          <p className="text-muted-foreground text-lg">
            Follow these 6 simple steps to learn printer installation from start to finish. Each step includes detailed instructions for beginners.
          </p>
        </header>

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
              <article className="relative">
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
              </article>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SetupGuide;
