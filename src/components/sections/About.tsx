import { ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const techs = [
  "Azure Databricks",
  "PySpark & Delta Lake",
  "Python & SQL",
  "LangChain / RAG",
  "Docker & Kubernetes",
  "Terraform & Ansible",
];

const About = () => {
  return (
    <section id="about" className="py-28">
      <div className="container">
        <Reveal>
          <h2 className="font-display font-bold text-3xl md:text-4xl flex items-center mb-12">
            <span className="section-num">01.</span> About Me
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-[1.6fr_1fr] gap-10 items-start">
          <Reveal className="glass-card p-8 md:p-10">
            <div className="space-y-5 text-foreground/75 leading-relaxed">
              <p>
                I'm a data engineer with <strong className="text-foreground">7+ years</strong> of experience across
                enterprise data platforms, currently part of the data engineering team at{" "}
                <strong className="text-foreground">Publicis Groupe (PGD India)</strong>, where I build and validate{" "}
                <strong className="text-foreground">Azure Databricks Lakehouse</strong> architecture end-to-end —
                PySpark pipelines, Delta Lake tables, and Medallion architecture data flows.
              </p>
              <p>
                I design and ship the ETL pipelines that feed business-critical KPIs, built a Python-based
                reconciliation utility that automated large-scale dataset validation across sources, and work
                closely with cross-functional teams on Azure DevOps CI/CD pipelines and cloud migrations.
              </p>
              <p>
                Alongside that, I'm pursuing an <strong className="text-foreground">M.Tech in AI &amp; ML at BITS
                Pilani</strong>, layering agentic AI, RAG pipelines, and LLM engineering on top of that data
                foundation — recent builds include a from-scratch ChatGPT clone and an MCP-based agentic AI system.
              </p>
            </div>

            <p className="mt-7 mb-3 text-sm font-mono text-foreground/50">// technologies I work with</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {techs.map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm font-mono text-foreground/70">
                  <ChevronRight size={14} className="text-primary shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150} className="glass-card p-7 space-y-6">
            <div>
              <p className="font-mono text-xs text-primary mb-1">// currently</p>
              <p className="font-display font-semibold text-lg">Data Engineer</p>
            </div>
            <div>
              <p className="text-xs text-foreground/50 mb-1">Publicis Groupe &middot; PGD India</p>
              <p className="text-sm text-foreground/75">Azure Databricks Lakehouse</p>
            </div>
            <div>
              <p className="text-xs text-foreground/50 mb-1">M.Tech AI &amp; ML</p>
              <p className="text-sm text-foreground/75">BITS Pilani (WILP)</p>
            </div>
            <div>
              <p className="text-xs text-foreground/50 mb-1">Based in</p>
              <p className="text-sm text-foreground/75">Chandigarh, India</p>
            </div>
            <div className="pt-4 border-t border-border grid grid-cols-2 gap-4">
              <div>
                <p className="font-display font-bold text-2xl text-primary">7+</p>
                <p className="text-xs text-foreground/50">Years in tech</p>
              </div>
              <div>
                <p className="font-display font-bold text-2xl text-primary">20+</p>
                <p className="text-xs text-foreground/50">Projects delivered</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
