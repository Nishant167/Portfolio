interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  meta?: string;
  id?: string;
}

/** Mono eyebrow + display title, with optional right-aligned mono meta. */
export function SectionHeading({
  eyebrow,
  title,
  meta,
  id,
}: SectionHeadingProps) {
  return (
    <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="label-mono text-muted">{eyebrow}</p>
        <h3
          id={id}
          className="mt-1.5 text-[26px] leading-tight font-extrabold lg:text-[28px]"
        >
          {title}
        </h3>
      </div>
      {meta ? (
        <span className="label-mono hidden text-muted sm:block">{meta}</span>
      ) : null}
    </div>
  );
}
