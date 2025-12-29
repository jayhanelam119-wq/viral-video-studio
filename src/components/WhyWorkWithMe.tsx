import { Zap, Clock, TrendingUp, MessageCircle, Shield, Target } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Get your edited videos quickly without sacrificing quality. Rush orders available.",
  },
  {
    icon: Target,
    title: "Platform-Optimized",
    description: "Every edit is tailored for the specific platform to maximize reach and engagement.",
  },
  {
    icon: TrendingUp,
    title: "Trend-Aware",
    description: "Stay ahead of the curve with edits that leverage current trends and formats.",
  },
  {
    icon: MessageCircle,
    title: "Creator-Friendly",
    description: "Clear communication and unlimited revisions until you're 100% satisfied.",
  },
  {
    icon: Shield,
    title: "Reliable & Professional",
    description: "Consistent quality, on-time delivery, and complete confidentiality guaranteed.",
  },
  {
    icon: Zap,
    title: "Results-Driven",
    description: "Edits focused on engagement, retention, and conversion—not just aesthetics.",
  },
];

const WhyWorkWithMe = () => {
  return (
    <section id="why" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <div className="relative">
            <div className="relative max-w-lg mx-auto">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-3xl" />
              
              {/* Main card */}
              <div className="relative glass-card rounded-3xl p-8 border-2 border-primary/20">
                <div className="space-y-6">
                  {/* Metric cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background/50 rounded-xl p-4 text-center">
                      <p className="text-3xl font-display gradient-text">24h</p>
                      <p className="text-xs text-muted-foreground">Avg. Turnaround</p>
                    </div>
                    <div className="bg-background/50 rounded-xl p-4 text-center">
                      <p className="text-3xl font-display gradient-text-accent">100%</p>
                      <p className="text-xs text-muted-foreground">Satisfaction</p>
                    </div>
                    <div className="bg-background/50 rounded-xl p-4 text-center">
                      <p className="text-3xl font-display gradient-text">∞</p>
                      <p className="text-xs text-muted-foreground">Revisions</p>
                    </div>
                    <div className="bg-background/50 rounded-xl p-4 text-center">
                      <p className="text-3xl font-display gradient-text-accent">4+</p>
                      <p className="text-xs text-muted-foreground">Years Exp.</p>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4">
                    <p className="text-lg font-semibold">Quality You Can Count On</p>
                    <p className="text-sm text-muted-foreground">Every single time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">Why Choose Me</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-8">
              WHY <span className="gradient-text">WORK</span> WITH ME?
            </h2>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/30 transition-colors group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                    <reason.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
