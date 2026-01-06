import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I find the correct driver for my printer model?",
      answer: "Visit your printer manufacturer's official website and navigate to the Downloads or Drivers section. Enter your exact printer model number, select your operating system (Windows 10/11, macOS, Linux), and download the recommended driver package. Always download from official sources to ensure security and compatibility.",
    },
    {
      question: "Can I connect one printer to multiple computers?",
      answer: "Yes, you can connect a single printer to multiple computers. Wireless printers can be accessed by any computer on the same WiFi network - simply install the drivers on each computer and add the printer through system settings. For USB printers, you can share the printer through your network settings or use a print server device.",
    },
    {
      question: "What is the difference between USB and wireless printer setup?",
      answer: "USB setup requires a physical cable connecting your printer directly to your computer - it offers reliable, fast connection but limits mobility. Wireless setup connects your printer to your WiFi network, allowing printing from any device on the network including smartphones and tablets, though it requires stable WiFi connectivity.",
    },
    {
      question: "How often should I perform printer maintenance?",
      answer: "For regular home use, perform basic maintenance every 1-2 months. This includes running the built-in print head cleaning utility, checking and cleaning paper feed rollers, and dusting the exterior. For heavy office use, monthly maintenance is recommended. Always follow your printer manual for specific maintenance guidelines.",
    },
    {
      question: "Why does my printer print blank pages?",
      answer: "Blank pages typically occur due to: empty ink or toner cartridges, clogged print heads (common in inkjet printers), incorrect paper size settings in print dialog, or driver communication issues. Start by checking ink levels, then run a print head cleaning cycle, verify paper settings, and if needed, reinstall the printer driver.",
    },
    {
      question: "How can I print documents from my smartphone?",
      answer: "Most modern printers support mobile printing. For Android devices, use the manufacturer's official app or Google Cloud Print service. For iPhones and iPads, look for AirPrint-compatible printers which allow direct printing. Many printers also support email printing - send documents to your printer's email address to print remotely.",
    },
    {
      question: "What paper sizes are commonly used for printing?",
      answer: "The most common paper sizes are: A4 (210 × 297mm) used in most countries, Letter (8.5 × 11 inches) used in US and Canada, Legal (8.5 × 14 inches) for legal documents, and A3 (297 × 420mm) for larger prints. Always ensure your print settings match the paper loaded in your printer tray to avoid errors.",
    },
    {
      question: "How do I set a printer as my default printing device?",
      answer: "On Windows: Open Settings > Devices > Printers & Scanners, select your printer, click Manage, then Set as Default. On Mac: Open System Preferences > Printers & Scanners, right-click your printer and select Set Default Printer. This ensures your preferred printer is automatically selected for all print jobs.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium text-sm mb-4 bg-primary/10 px-4 py-2 rounded-full">
            Knowledge Base
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Get answers to the most common questions about printer installation, configuration, and maintenance.
          </p>
        </header>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
