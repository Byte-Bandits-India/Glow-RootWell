import React from "react";
import { PromptItem } from "@/data/promptsData";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { Calendar, ArrowRight, Clock } from "lucide-react";

export interface PromptCardProps {
  prompt: PromptItem;
  viewMode?: "grid" | "list";
  onSelect: (prompt: PromptItem) => void;
}

export const PromptCard: React.FC<PromptCardProps> = ({
  prompt,
  viewMode = "grid",
  onSelect,
}) => {
  const formattedDate = new Date(prompt.updated + "T00:00:00").toLocaleDateString(
    "en-US",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );

  if (viewMode === "list") {
    return (
      <Card
        variant="surface"
        interactive
        padding="md"
        onClick={() => onSelect(prompt)}
        className="group flex flex-col md:flex-row md:items-center justify-between gap-4 border-[var(--color-border)] hover:border-[var(--color-accent)]"
      >
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant={prompt.category} />
            <Badge variant={prompt.bundle} />
            <span className="text-xs text-[var(--color-text-secondary)] flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {prompt.duration}
            </span>
          </div>

          <h3 className="font-heading text-lg font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
            {prompt.title}
          </h3>

          <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2 leading-relaxed">
            {prompt.description}
          </p>
        </div>

        <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-[var(--color-border)]">
          <span className="text-xs text-[var(--color-text-secondary)] flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {formattedDate}
          </span>

          <button
            type="button"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-[var(--color-background)] text-[var(--color-text-primary)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-primary)] transition-all cursor-pointer"
          >
            <span>View</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </Card>
    );
  }

  return (
    <Card
      variant="surface"
      interactive
      padding="md"
      onClick={() => onSelect(prompt)}
      className="group flex flex-col justify-between h-full border-[var(--color-border)] hover:border-[var(--color-accent)] min-h-[250px]"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <Badge variant={prompt.category} />
          <Badge variant={prompt.bundle} />
        </div>

        <h3 className="font-heading text-lg font-semibold leading-snug text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
          {prompt.title}
        </h3>

        <p className="text-sm text-[var(--color-text-secondary)] line-clamp-3 leading-relaxed">
          {prompt.description}
        </p>
      </div>

      <div className="pt-4 mt-4 border-t border-[var(--color-border)] flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
        <span className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" />
          {formattedDate}
        </span>

        <span className="inline-flex items-center gap-1 font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
          <span>View prompt</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Card>
  );
};
