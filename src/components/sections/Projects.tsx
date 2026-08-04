import { Folder, Bot, Database, MessageSquare, Search, ShoppingBag, HeartPulse, GraduationCap, BrainCircuit, Lock } from "lucide-react";
import Reveal from "@/components/Reveal";

const featured = [
  {
    icon: Bot,
    tag: "Featured Project",
    title: "TKI Agent — Agentic AI System",
    desc: "Designed and built an agentic AI system with tool-use capabilities, exploring the Model Context Protocol (MCP) for connecting LLMs to external data sources and services — an autonomous workflow layer on top of my data engineering background.",
    tech: ["MCP", "Agentic AI", "Claude API", "Python"],
    status: "Personal R&D project",
  },
  {
    icon: Database,
    tag: "Featured Project",
    title: "Azure Databricks Lakehouse & Reconciliation",
    desc: "Core of my day job at Publicis Groupe (PGD India): building and validating PySpark pipelines across a Medallion-architecture Lakehouse, and a Python reconciliation utility that automates cross-source dataset validation at enterprise scale.",
    tech: ["Azure Databricks", "PySpark", "Delta Lake", "SQL"],
    status: "🔒 Client confidential",
  },
];

const others = [
  {
    icon: MessageSquare,
    title: "Minimal ChatGPT Clone",
    desc: "Conversational AI app built from scratch using the OpenAI API and Python, with multi-turn conversation memory and streaming responses.",
    tech: ["OpenAI API", "Python", "Streaming"],
  },
  {
    icon: Search,
    title: "RAG Pipeline for Document QA",
    desc: "Retrieval-Augmented Generation pipeline using LangChain, Hugging Face embeddings, and Llama for domain-specific document question answering.",
    tech: ["LangChain", "Hugging Face", "Llama"],
  },
  {
    icon: ShoppingBag,
    title: "Gulf Food Delivery Platform",
    desc: "Data pipeline validation for a large-scale food delivery app serving Gulf-region clients — real-time order pipelines, payment reconciliation, delivery tracking.",
    tech: ["SQL", "ETL", "Python"],
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Digital Marketing Data Engineering",
    desc: "Built patient-data pipelines, campaign analytics, KPI dashboards, and ETL processes across multiple healthcare and digital marketing platforms.",
    tech: ["ETL", "KPI Validation", "SQL"],
  },
  {
    icon: GraduationCap,
    title: "College Web Platform",
    desc: "Project coordinator and data pipeline lead for a multi-department college website — test planning, CMS workflows, and release cycle management.",
    tech: ["SQL", "CMS", "Coordination"],
  },
  {
    icon: BrainCircuit,
    title: "AI / ML Research Projects",
    desc: "CNN image classifiers with transfer learning, Reinforcement Learning (Q-learning, DQN, DDQN), and end-to-end ML data pipelines from M.Tech coursework.",
    tech: ["CNN", "DQN / DDQN", "PyTorch"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-28">
      <div className="container">
        <Reveal>
          <h2 className="font-display font-bold text-3xl md:text-4xl flex items-center mb-12">
            <span className="section-num">04.</span> Some Things I've Built
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {featured.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 100} className="glass-card p-7 flex flex-col">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-primary" />
                </div>
                <p className="font-mono text-xs text-primary mb-2">{p.tag}</p>
                <h3 className="font-display font-semibold text-lg mb-3">{p.title}</h3>
                <p className="text-sm text-foreground/65 leading-relaxed mb-5 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-3 font-mono text-xs text-foreground/50 mb-3">
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <p className="text-xs italic text-foreground/40 flex items-center gap-1.5">
                  {p.status.startsWith("🔒") && <Lock size={12} />}
                  {p.status.replace("🔒 ", "")}
                </p>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <h3 className="text-center font-mono text-foreground/60 mb-8">Other Noteworthy Projects</h3>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {others.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 60} className="glass-card p-6 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <Folder size={26} className="text-primary" />
                  <Icon size={18} className="text-foreground/30" />
                </div>
                <h4 className="font-display font-semibold mb-2">{p.title}</h4>
                <p className="text-sm text-foreground/65 leading-relaxed mb-4 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-3 font-mono text-xs text-foreground/45">
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
