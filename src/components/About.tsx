import { User, Sparkles, Zap } from "lucide-react";
const About = () => {
  return <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
              <User className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">About Me</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-left">
              I'M <span className="gradient-text">JAYHAN</span>, YOUR NEXT
              CREATIVE PARTNER
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">I’m a digital content professional specializing in high-impact short-form and long-form video editing for social media platforms. With a strong command of audience psychology, platform algorithms, and viral storytelling, I help creators and brands cut through the noise, scale their reach, and turn content into measurable growth.</p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              From UGC videos to YouTube automation content, I bring expertise
              in storytelling, fast pacing, clean captions, and
              conversion-focused edits. My goal is simple: make your content
              impossible to scroll past.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass-card p-4 glow-border">
                <Sparkles className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-1">Platform Expert</h3>
                <p className="text-sm text-muted-foreground">
                  Optimized edits for TikTok, Reels, and YouTube
                </p>
              </div>
              <div className="glass-card p-4 glow-border">
                <Zap className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-semibold mb-1">Fast Turnaround</h3>
                <p className="text-sm text-muted-foreground">
                  Quick delivery without compromising quality
                </p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <div className="relative glass-card h-full rounded-3xl overflow-hidden border-2 border-primary/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <span className="text-5xl font-display text-primary-foreground">
                        J
                      </span>
                    </div>
                    <h3 className="text-2xl font-display mb-2">JAYHAN</h3>
                    <p className="text-muted-foreground">
                      Video Editor & UGC Creator
                    </p>
                  </div>
                </div>
                {/* Decorative grid lines */}
                <div className="absolute inset-0 opacity-10">
                  <div className="h-full w-full" style={{
                  backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
                  backgroundSize: '50px 50px'
                }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;