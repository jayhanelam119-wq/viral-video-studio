import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Video editing workspace"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/80" />
      </div>

      {/* Animated accent elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float animation-delay-400" />

      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Available for new projects
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display leading-none mb-6 animate-slide-up">
            HELPING CREATORS & BRANDS{" "}
            <span className="gradient-text">GO VIRAL</span> THROUGH{" "}
            <span className="gradient-text-accent">HIGH-IMPACT</span> VIDEO
            EDITING
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
            Professional short-form video editing for TikTok, Instagram Reels &
            YouTube. From UGC to cinematic content that converts.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToContact}
              className="group"
            >
              Work With Me
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="glass"
              size="xl"
              onClick={scrollToPortfolio}
              className="group"
            >
              <Play className="w-5 h-5" />
              View My Work
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in-up animation-delay-600">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-display gradient-text">
                50+
              </p>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-display gradient-text-accent">
                500+
              </p>
              <p className="text-sm text-muted-foreground">Videos Edited</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-display gradient-text">
                10M+
              </p>
              <p className="text-sm text-muted-foreground">Views Generated</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
