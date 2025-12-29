import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    
    videoUrl: "https://drive.google.com/uc?export=download&id=1jNKNpuMCEBA1D7FsLvEZZfKNJubFfJSf"
  },
  {
    
    videoUrl: "https://drive.google.com/uc?export=download&id=1ESowQhhGhUuRl_CCTawUsBHRHFzPmLfz"
  },
  {
    
    videoUrl: "https://drive.google.com/uc?export=download&id=19yMyUuzkBAdSG7Yjp8-Hge-m3G74DruW"
  },
  {
    
    videoUrl: "https://drive.google.com/uc?export=download&id=1V0GgEqsNaCmEfi37yP829t3-qgdwh6r9"
  },
  {
   
    videoUrl: "https://drive.google.com/uc?export=download&id=1XF4Gef1uGQ-f0ZS1AOgHHYiruJcH-8Fg"
  },
  {
    
    videoUrl: "https://drive.google.com/uc?export=download&id=1RoZdcuyBql3kzVkVbwTimfwLhAYCsO7P"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
            <Play className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
            MY <span className="gradient-text-accent">BEST WORK</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A showcase of viral-worthy content that has helped creators and
            brands reach millions.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center animate-pulse-glow">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.views}</p>
              </div>

              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-background/80 backdrop-blur-sm border border-border">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            View Full Portfolio
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
