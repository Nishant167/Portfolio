import { SERVICES } from "@/lib/data/services";
import { Panel } from "@/components/ui/Panel";
import { Reveal } from "@/components/ui/Reveal";

export function Services() {
  return (
    <Reveal
      as="section"
      id="services"
      aria-labelledby="services-heading"
      className="grid scroll-mt-4 grid-cols-1 gap-5"
    >
      <Panel as="article" className="p-6 lg:p-7">
        <div className="mb-6">
          <p className="label-mono text-muted">Services</p>
          <h3
            id="services-heading"
            className="mt-1.5 text-[26px] leading-tight font-extrabold lg:text-[28px]"
          >
            What I can build for you
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name}
                className="rounded-lg border border-border bg-gradient-to-br from-white to-neutral-50 p-5 transition-all hover:border-border-hover hover:shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`rounded-lg p-2.5 text-white ${
                      service.accent === "terracotta" ? "bg-terracotta" : ""
                    } ${service.accent === "forest" ? "bg-forest" : ""} ${
                      service.accent === "sand" ? "bg-sand" : ""
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-ink">{service.name}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Panel>
    </Reveal>
  );
}
