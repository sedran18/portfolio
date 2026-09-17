import type { Messages, ProjectStatus } from "@/types";

type StatusBadgeProps = {
  status: ProjectStatus;
  messages: Messages;
};

const tone: Record<ProjectStatus, string> = {
  completed: "text-emerald-300/90 bg-emerald-400/8",
  "in-progress": "text-accent bg-accent/10",
  prototype: "text-sky-300/90 bg-sky-400/8",
  "coming-soon": "text-zinc-300 bg-white/6",
  archived: "text-zinc-500 bg-white/4",
};

export function StatusBadge({ status, messages }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-sm px-2 py-1 text-[11px] uppercase tracking-[0.16em] ${tone[status]}`}
    >
      {messages.status[status]}
    </span>
  );
}
