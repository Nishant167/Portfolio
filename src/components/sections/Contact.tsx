import { Github, Linkedin, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import Button from "@/components/ui/Button";

const Contact = () => {
  return (
    <section id="contact" className="py-28">
      <div className="container flex flex-col items-center text-center">
        <Reveal className="w-full flex flex-col items-center">
          <p className="font-mono text-primary text-sm mb-3">05. What's Next?</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-5">Get In Touch</h2>
          <p className="max-w-md text-foreground/65 mb-10 leading-relaxed">
            Whether it's a data engineering role, an Azure/Databricks build-out, or an AI/ML collaboration — my
            inbox is open.
          </p>
          <a href="mailto:nishantkpahwa@gmail.com">
            <Button variant="primary" className="text-base px-9 py-4">
              Say Hello
            </Button>
          </a>

          <div className="flex items-center gap-5 mt-14">
            <a
              href="https://github.com/nishant167"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 rounded-lg glass-card flex items-center justify-center text-foreground/60 hover:text-primary transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/n-p-90625722a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-lg glass-card flex items-center justify-center text-foreground/60 hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:nishantkpahwa@gmail.com"
              aria-label="Email"
              className="w-11 h-11 rounded-lg glass-card flex items-center justify-center text-foreground/60 hover:text-primary transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
