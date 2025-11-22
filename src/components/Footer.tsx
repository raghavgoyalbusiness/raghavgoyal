import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="section-night py-8 border-t border-night-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <p className="text-night-foreground/70 text-sm">
            © {new Date().getFullYear()} Raghav Goyal. Built at 3AM with{' '}
            <Heart className="inline h-4 w-4 text-primary" /> for the restless and ambitious.
          </p>
          <p className="text-night-foreground/50 text-xs">
            Marketing · Partnerships · Influencer Campaigns · The 3AM Show
          </p>
        </div>
      </div>
    </footer>
  );
};
