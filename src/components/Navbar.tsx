import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Terminal } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnClick = () => setMenuOpen(false);
    document.addEventListener("click", closeOnClick);
    return () => document.removeEventListener("click", closeOnClick);
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-panel py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg">
          <Terminal size={20} className="text-primary" />
          <span>
            np<span className="text-primary">.</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              <span className="text-primary">0{i + 1}.</span> {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle theme"
            onClick={() => setDark((d) => !d)}
            className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/50 transition-colors"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            aria-label="Toggle menu"
            className="md:hidden w-9 h-9 rounded-md border border-border flex items-center justify-center text-primary"
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen((o) => !o);
            }}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="md:hidden glass-panel mx-4 mt-3 rounded-xl p-4 flex flex-col gap-1"
          onClick={(e) => e.stopPropagation()}
        >
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-sm px-3 py-2.5 rounded-md text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
            >
              <span className="text-primary">0{i + 1}.</span> {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
