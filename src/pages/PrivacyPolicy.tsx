import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
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
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: January 2024</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto prose prose-slate">
          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Welcome to PrinterHelp. This Privacy Policy explains how we collect, use, and protect your information when you visit our educational website. We are committed to protecting your privacy and ensuring transparency in our data practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Information You Provide:</strong> When you use our contact form, we may collect your name, email address, and any message content you submit.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Automatically Collected Information:</strong> We may automatically collect certain information about your device, including your IP address, browser type, operating system, and browsing behavior on our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We use the collected information to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Respond to your inquiries and provide educational assistance</li>
              <li>Improve our website content and user experience</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Ensure the security of our website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">4. Cookies and Tracking</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">5. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may use third-party analytics services to understand website usage. These services may collect information about your visits to our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">6. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">7. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the right to access, correct, or delete your personal information. Contact us if you wish to exercise these rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">8. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">9. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please visit our{" "}
              <Link to="/contact" className="text-primary hover:underline">Contact Page</Link>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
