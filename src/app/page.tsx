import { WorkspaceProvider } from "@/context/WorkspaceProvider";
import { WorkspaceShell } from "@/components/shell/WorkspaceShell";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { KpiShelf } from "@/components/sections/KpiShelf";
import { OverviewHero } from "@/components/sections/OverviewHero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { TechMarquee } from "@/components/sections/TechMarquee";

export default function Home() {
  return (
    <WorkspaceProvider>
      <WorkspaceShell>
        <OverviewHero />
        <KpiShelf />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <TechMarquee />
        <Contact />
      </WorkspaceShell>
    </WorkspaceProvider>
  );
}
