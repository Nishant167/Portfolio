import { Database, Sparkles, Cpu, Code2, Settings, CheckCircle2, LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";

interface SkillGroup {
  icon: LucideIcon;
  title: string;
  items: string[];
}

const groups: SkillGroup[] = [
  {
    icon: Database,
    title: "Data Engineering & Cloud",
    items: ["Azure Databricks", "PySpark", "Delta Lake / Lakehouse", "Medallion Architecture"],
  },
  {
    icon: Sparkles,
    title: "AI & LLM Engineering",
    items: ["LangChain / RAG", "Agentic AI / MCP", "OpenAI / Llama / Claude API", "Hugging Face"],
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    items: ["CNN / MLP", "Reinforcement Learning", "NLP", "TensorFlow / PyTorch"],
  },
  {
    icon: Code2,
    title: "Python & Data Tools",
    items: ["Python", "SQL (Advanced)", "NumPy / Pandas", "Vector DBs (FAISS, Pinecone)"],
  },
  {
    icon: Settings,
    title: "DevOps & Infra",
    items: ["Azure DevOps / GitHub", "Docker / Kubernetes (AKS)", "Terraform / Ansible", "Azure Key Vault"],
  },
  {
    icon: CheckCircle2,
    title: "Data Quality & Reconciliation",
    items: ["ETL Validation", "Cross-source Reconciliation", "KPI Validation", "Agile / JIRA"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-28">
      <div className="container">
        <Reveal>
          <h2 className="font-display font-bold text-3xl md:text-4xl flex items-center mb-12">
            <span className="section-num">03.</span> Skills &amp; Tools
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, i) => {
            const Icon = g.icon;
            return (
              <Reveal key={g.title} delay={i * 70} className="glass-card p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-3">{g.title}</h3>
                <ul className="space-y-1.5">
                  {g.items.map((item) => (
                    <li key={item} className="text-sm text-foreground/65 font-mono flex items-center gap-2">
                      <span className="text-primary">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
