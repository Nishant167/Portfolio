import { ArrowDown, Terminal } from "lucide-react";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const Hero = () => {
  const { x, y } = useMouseParallax(0.03);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden pt-24"
    >
      {/* parallax glow blobs */}
      <div
        className="absolute w-[520px] h-[520px] rounded-full bg-primary/10 blur-[120px] pointer-events-none"
        style={{ top: "-10%", left: "-8%", transform: `translate(${x}px, ${y}px)` }}
      />
      <div
        className="absolute w-[420px] h-[420px] rounded-full bg-primary/10 blur-[110px] pointer-events-none"
        style={{ bottom: "-12%", right: "-6%", transform: `translate(${-x}px, ${-y}px)` }}
      />

      <div className="container relative z-10 flex flex-col items-center text-center gap-7">
        <Badge className="animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-slow" />
          Data Engineer &middot; Open to Opportunities
        </Badge>

        <div className="w-24 h-24 rounded-2xl glass-card animate-floating flex items-center justify-center">
          <Terminal size={40} className="text-primary" />
        </div>

        <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl tracking-tight">
          <span className="relative inline-block">
            Nishant Pahwa
            <span className="absolute left-0 -bottom-2 w-full h-[6px] bg-primary/70 rounded-full" />
          </span>
        </h1>

        <p className="font-mono text-primary text-base sm:text-lg text-glow">
          $ engineering data pipelines that power decisions
        </p>

        <p className="max-w-xl text-foreground/70 text-base sm:text-lg leading-relaxed">
          I build and validate <strong className="text-foreground">Azure Databricks Lakehouse</strong> architecture
          at Publicis Groupe (PGD India) — PySpark pipelines, Delta Lake, and large-scale data quality frameworks.
          Pursuing my <strong className="text-foreground">M.Tech in AI &amp; ML at BITS Pilani</strong>, I build
          agentic AI systems on the side.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <Button variant="primary" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Get in touch
          </Button>
          <Button variant="outline" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            View my work
          </Button>
        </div>
      </div>

      <button
        aria-label="Scroll to about"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/40 hover:text-primary transition-colors animate-pulse-slow"
      >
        <ArrowDown size={22} />
      </button>
    </section>
  );
};

export default Hero;
