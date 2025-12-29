import { Check, Sparkles, Video, Crown, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Content Creator Starter",
    icon: Video,
    description: "Perfect for new creators growing their social presence",
    price: 300,
    savings: "Save 30% vs individual pricing",
    features: [
      "2x Long-form videos (up to 8 min)",
      "8x Short-form videos (60 sec)",
      "Professional color grading",
      "Graphics & text overlays",
      "Social media optimization",
      "3 Revision rounds per video",
      "7-day turnaround",
    ],
    badge: "Perfect for YouTubers & TikTokers",
    cta: "Start Creating with Me",
    popular: false,
  },
  {
    name: "Business Growth",
    icon: Sparkles,
    description: "Ideal for content-driven brands ready to scale",
    price: 550,
    savings: "Save 35% vs individual pricing",
    features: [
      "4x Long-form videos (up to 8 min)",
      "16x Short-form videos (60 sec)",
      "Advanced cinematic grading",
      "Motion graphics & animations",
      "Multi-platform optimization",
      "Priority queue access",
      "3 Revision rounds per video",
      "5-day turnaround",
    ],
    badge: "Perfect for businesses & coaches",
    cta: "Let's Grow Your Channel",
    popular: true,
  },
  {
    name: "Enterprise Content Powerhouse",
    icon: Crown,
    description: "For established creators demanding premium production",
    price: 800,
    savings: "Save 40% vs individual pricing",
    features: [
      "8x Long-form videos (up to 8 min)",
      "25x Short-form videos (60 sec)",
      "Hollywood-level color grading",
      "Advanced 3D animations",
      "Multi-format delivery",
      "Express turnaround",
      "Unlimited revisions",
      "3-day turnaround",
      "Dedicated project manager",
    ],
    badge: "Perfect for enterprises & agencies",
    cta: "Work with Me Now",
    popular: false,
  },
];

const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="section-padding bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.08)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Crown className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-medium">Monthly Creative Partnerships</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Choose Your Creative Power Level
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built for visionaries who want to tell stories that move people. Consistent, cinematic content that builds audiences and drives engagement.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-b from-accent/20 to-accent/5 border-2 border-accent shadow-[0_0_40px_hsl(var(--accent)/0.3)] scale-105 z-10"
                  : "bg-card/50 border border-border/50 hover:border-accent/30"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-accent text-accent-foreground text-sm font-bold rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  plan.popular ? "bg-accent/20" : "bg-accent/10"
                }`}>
                  <plan.icon className={`w-6 h-6 ${plan.popular ? "text-accent" : "text-accent"}`} />
                </div>
                <h3 className="font-display text-xl lg:text-2xl text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl text-muted-foreground">$</span>
                  <span className="font-display text-5xl lg:text-6xl text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <div className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-medium ${
                  plan.popular 
                    ? "bg-accent/20 text-accent" 
                    : "bg-primary/10 text-primary"
                }`}>
                  {plan.savings}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                      plan.popular ? "bg-accent/20" : "bg-primary/10"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? "text-accent" : "text-primary"}`} />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Badge */}
              <div className={`text-center mb-6 px-4 py-2 rounded-lg text-xs font-medium ${
                plan.popular 
                  ? "bg-accent/10 text-accent border border-accent/20" 
                  : "bg-primary/5 text-primary/80 border border-primary/10"
              }`}>
                {plan.badge}
              </div>

              {/* CTA Button */}
              <Button
                onClick={scrollToContact}
                className={`w-full ${
                  plan.popular
                    ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                    : "bg-primary hover:bg-primary/90 text-primary-foreground"
                }`}
              >
                {plan.cta} →
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-card/30 border border-border/50 max-w-lg">
            <h3 className="font-display text-2xl text-foreground mb-2">
              Not sure which fits best? Let's talk.
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              I'll craft a package tailored to your needs, timeline, and creative vision.
            </p>
            <Button onClick={scrollToContact} variant="outline" className="gap-2">
              <MessageSquare className="w-4 h-4" />
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
