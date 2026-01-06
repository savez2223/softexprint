import { AlertTriangle } from "lucide-react";

const Disclaimer = () => {
  return (
    <section className="py-12 bg-destructive/5 border-y border-destructive/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-destructive" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-2 text-lg">Important Disclaimer</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                <strong>Educational Purpose Only:</strong> This website is created solely for educational and informational purposes. We are <strong>NOT</strong> affiliated with any printer manufacturer or brand. We do <strong>NOT</strong> provide any third-party technical support, repair services, or customer service.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                All content on this website is meant to help students and beginners learn about general printer setup procedures. For official support, warranty claims, or technical assistance, please contact your printer manufacturer directly through their official website.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We do not sell any products or services. Any brand names, trademarks, or logos mentioned are the property of their respective owners and are used for educational reference only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
