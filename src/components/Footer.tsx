export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="font-heading font-semibold">
              Raghav<span className="text-primary">.</span>
            </span>
          </div>
          <p className="text-sm text-foreground/50">
            © {new Date().getFullYear()} Raghav Goyal — Built at 3AM, London.
          </p>
          <div className="flex items-center gap-4 text-xs text-foreground/40">
            <a href="#home" className="hover:text-primary transition-colors">Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
