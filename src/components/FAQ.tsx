import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I find the right driver for my printer?",
      answer: "Visit your printer manufacturer's official website, go to the Support or Downloads section, enter your printer model number, select your operating system, and download the latest driver. Make sure to download from official sources only to avoid malware.",
    },
    {
      question: "Can I connect my printer to multiple computers?",
      answer: "Yes! Wireless printers can be connected to multiple computers on the same network. Simply install the drivers on each computer and add the printer through Settings. For USB printers, you can use a print server or share the printer through network sharing settings.",
    },
    {
      question: "What's the difference between USB and Wireless setup?",
      answer: "USB setup involves connecting the printer directly to your computer with a cable - it's reliable and fast but limits mobility. Wireless setup connects via WiFi, allowing printing from anywhere in your home/office and from multiple devices, but requires a stable WiFi network.",
    },
    {
      question: "How often should I clean my printer?",
      answer: "For regular home use, clean your printer every 1-2 months. This includes running the built-in cleaning function for print heads and physically cleaning paper rollers and exterior surfaces. Heavy office use may require more frequent cleaning.",
    },
    {
      question: "Why is my printer printing blank pages?",
      answer: "Blank pages can be caused by: empty ink/toner cartridges, clogged print heads, incorrect paper settings, or driver issues. First check ink levels, then run a print head cleaning cycle. If the problem persists, reinstall the printer driver.",
    },
    {
      question: "How do I print from my smartphone?",
      answer: "Most modern printers support mobile printing. For Android, use the manufacturer's app or Google Cloud Print. For iPhone, look for AirPrint compatibility. Alternatively, you can email documents to your printer if it has an email printing feature.",
    },
    {
      question: "What paper size settings should I use?",
      answer: "Always match the paper size setting in your print dialog to the actual paper loaded in the tray. Common sizes are A4 (most countries), Letter (US), and Legal. Using mismatched settings can cause printing errors or paper jams.",
    },
    {
      question: "How do I set my printer as the default?",
      answer: "On Windows: Settings > Devices > Printers & Scanners > Select your printer > Manage > Set as default. On Mac: System Preferences > Printers & Scanners > Right-click your printer > Set Default Printer.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium text-sm mb-4 bg-primary/10 px-4 py-2 rounded-full">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Find answers to the most common questions about printer setup and maintenance.
          </p>
        </div>

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
