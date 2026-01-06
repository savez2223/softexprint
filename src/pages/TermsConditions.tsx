import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-secondary/50 border-b border-border py-8">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Terms & Conditions</h1>
              <p className="text-muted-foreground">Last updated: January 2024</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto prose prose-slate">
          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By accessing and using PrinterHelp website, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">2. Educational Purpose Only</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This website is created exclusively for educational and informational purposes. All content, tutorials, guides, and resources are intended to help users learn about general printer setup and configuration procedures.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4 font-semibold">
              Important: We do NOT provide any third-party technical support, repair services, customer service, or warranty assistance. We are NOT affiliated with any printer manufacturer or brand.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">3. No Professional Advice</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The information provided on this website is for general educational purposes only and should not be considered as professional technical advice. For official support, warranty claims, or technical assistance, please contact your printer manufacturer directly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">4. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All content on this website, including text, graphics, logos, and images, is the property of PrinterHelp or its content suppliers and is protected by intellectual property laws.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Any brand names, trademarks, or logos mentioned on this website are the property of their respective owners and are used solely for educational reference purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">5. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This website and its content are provided on an &quot;as is&quot; basis without any warranties of any kind. We do not guarantee the accuracy, completeness, or usefulness of any information provided.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              PrinterHelp shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this website or reliance on any information provided herein.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">7. User Conduct</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">You agree not to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Use this website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Copy, reproduce, or distribute our content without permission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">8. External Links</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our website may contain links to external websites. We are not responsible for the content or privacy practices of these external sites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">9. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">10. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms and Conditions, please visit our{" "}
              <Link to="/contact" className="text-primary hover:underline">Contact Page</Link>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TermsConditions;
