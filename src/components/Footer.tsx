import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 px-4">
      <div className="container mx-auto">
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            © 2025 Global Temperature Simulator
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-foreground">
            <span>Created with</span>
            <Heart className="h-4 w-4 text-destructive fill-destructive animate-pulse-glow" />
            <span>by <strong>Karl Santino Sacayan</strong></span>
          </div>
          <p className="text-xs text-muted-foreground">
            GED0011 Project • Climate Education Tool
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
