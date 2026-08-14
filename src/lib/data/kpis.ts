import { Activity, CheckCheck, Clock, GitBranch } from "lucide-react";

import type { Kpi } from "@/lib/types";

/** The kit's 4-card KPI shelf, translated to engineering metrics. */
export const KPIS: Kpi[] = [
  {
    label: "Years in tech",
    value: 7,
    suffix: "+",
    note: "Enterprise data platforms",
    noteAccent: "forest",
    icon: Clock,
    iconAccent: "terracotta",
  },
  {
    label: "Projects delivered",
    value: 20,
    suffix: "+",
    note: "Across enterprise clients",
    noteAccent: "forest",
    icon: CheckCheck,
    iconAccent: "forest",
  },
  {
    label: "Pipelines built",
    value: 40,
    suffix: "+",
    note: "PySpark ETL · Delta Lake",
    noteAccent: "terracotta",
    icon: GitBranch,
    iconAccent: "sand",
  },
  {
    label: "Pipeline uptime",
    value: 99.9,
    decimals: 1,
    suffix: "%",
    note: "Monitored & validated",
    noteAccent: "forest",
    icon: Activity,
    iconAccent: "terracotta",
  },
];
