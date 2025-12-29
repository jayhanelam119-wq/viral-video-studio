import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, MessageCircle, Instagram, Youtube } from "lucide-react";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message sent!",
      description: "I'll get back to you within 24 hours."
    });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };
  return <section id="contact" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Get In Touch</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-left">
              LET'S EDIT YOUR NEXT{" "}
              <span className="gradient-text-accent">VIRAL VIDEO</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              Ready to take your content to the next level? Drop me a message
              and let's discuss your project. I typically respond within 24
              hours.
            </p>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Find Me On
              </h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-xl bg-secondary/50 border border-border flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all group">
                  <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl bg-secondary/50 border border-border flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all group">
                  <Youtube className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl bg-secondary/50 border border-border flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all group">
                  <MessageCircle className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass-card p-6 md:p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input id="name" name="name" placeholder="John Doe" required className="bg-secondary/50 border-border focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" required className="bg-secondary/50 border-border focus:border-primary" />
                </div>
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium mb-2">
                  Project Type
                </label>
                <Input id="project" name="project" placeholder="e.g., TikTok videos, YouTube edits, UGC..." required className="bg-secondary/50 border-border focus:border-primary" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Tell Me About Your Project
                </label>
                <Textarea id="message" name="message" placeholder="Describe your project, goals, and timeline..." rows={5} required className="bg-secondary/50 border-border focus:border-primary resize-none" />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                I'll respond within 24 hours. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;