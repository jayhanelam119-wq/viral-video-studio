import {
  Video,
  Smartphone,
  Youtube,
  Captions,
  Film,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Short-Form Video Editing",
    description:
      "TikTok, Instagram Reels & YouTube Shorts optimized for maximum engagement and virality.",
    color: "primary",
  },
  {
    icon: Video,
    title: "UGC Video Editing",
    description:
      "Authentic, relatable user-generated content that builds trust and drives conversions.",
    color: "accent",
  },
  {
    icon: Youtube,
    title: "YouTube Video Editing",
    description:
      "Long-form content editing with hooks, pacing, and retention optimization.",
    color: "primary",
  },
  {
    icon: Captions,
    title: "Subtitles & Captions",
    description:
      "Eye-catching animated captions and subtitles that boost accessibility and engagement.",
    color: "accent",
  },
  {
    icon: Film,
    title: "B-roll & Cinematics",
    description:
      "Professional b-roll integration and cinematic enhancements for premium feel.",
    color: "primary",
  },
  {
    icon: Sparkles,
    title: "Trend-Based Edits",
    description:
      "Stay ahead with trending sounds, effects, and formats that capture attention.",
    color: "accent",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
            WHAT I <span className="gradient-text">DO BEST</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From quick social clips to polished YouTube content, I offer
            comprehensive video editing services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card p-6 glow-border group hover:border-primary/30 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center ${
                  service.color === "primary"
                    ? "bg-primary/20"
                    : "bg-accent/20"
                }`}
              >
                <service.icon
                  className={`w-7 h-7 ${
                    service.color === "primary"
                      ? "text-primary"
                      : "text-accent"
                  }`}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
