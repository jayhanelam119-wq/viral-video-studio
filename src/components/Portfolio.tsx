import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    title: "Viral TikTok Compilation",
    category: "Short-Form",
    views: "2.5M views",
    thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=600&fit=crop",
  },
  {
    title: "Brand UGC Campaign",
    category: "UGC",
    views: "850K views",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
  },
  {
    title: "YouTube Documentary Edit",
    category: "Long-Form",
    views: "1.2M views",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop",
  },
  {
    title: "Instagram Reels Series",
    category: "Short-Form",
    views: "3.1M views",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
  },
  {
    title: "Product Launch Video",
    category: "Commercial",
    views: "500K views",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop",
  },
  {
    title: "Podcast Highlights",
    category: "Long-Form",
    views: "780K views",
    thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=600&fit=crop",
  },
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
