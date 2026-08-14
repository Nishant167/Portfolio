"use client";

import type { FilterOption } from "@/lib/types";

interface FilterTabsProps<T extends string> {
  options: FilterOption<T>[];
  value: T | "all";
  onChange: (value: T | "all") => void;
  label: string;
}

/** Mono pill tab row used above the skills grid and the projects grid. */
export function FilterTabs<T extends string>({
  options,
  value,
  onChange,
  label,
}: FilterTabsProps<T>) {
  return (
    <div role="tablist" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isActive = option.value === value;

        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option.value)}
            className={`label-mono cursor-pointer rounded-full border px-3.5 py-2 ${
              isActive
                ? "border-ink bg-ink text-canvas"
                : "border-hairline bg-surface text-body hover:border-terracotta hover:text-terracotta"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
