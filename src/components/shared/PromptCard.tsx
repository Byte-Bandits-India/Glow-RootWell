import React from "react";
import { PromptItem } from "@/data/promptsData";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { Calendar, ArrowRight, Clock } from "lucide-react";

export interface PromptCardProps {
  prompt: PromptItem;
  viewMode?: "grid" | "list";
  isOwned?: boolean;
  onSelect: (prompt: PromptItem) => void;
}

export const PromptCard: React.FC<PromptCardProps> = ({
  prompt,
  viewMode = "grid",
  isOwned = false,
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
            {isOwned && prompt.bundle !== "free" && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                Unlocked
              </span>
            )}
            {prompt.subtopic && (
              <span className="text-[11px] text-[var(--color-text-secondary)] bg-[var(--color-background)] px-2 py-0.5 rounded-md truncate max-w-[200px]">
                {prompt.subtopic}
              </span>
            )}
            <span className="text-xs text-[var(--color-text-secondary)] flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {prompt.timeSaved || prompt.duration || "5–10 mins"}
            </span>
          </div>

          <h3 className="font-heading text-lg font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
            {prompt.title}
          </h3>

          <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2 leading-relaxed">
            {prompt.purpose || prompt.description}
          </p>
        </div>

        <div className="flex items-center justify-between md:justify-end gap-3 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-[var(--color-border)]">
          {prompt.revenuePotential && (
            <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 whitespace-nowrap">
              {prompt.revenuePotential}
            </span>
          )}

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
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 flex-wrap">
            <Badge variant={prompt.category} />
            <Badge variant={prompt.bundle} />
          </div>
          {isOwned && prompt.bundle !== "free" && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
              Unlocked
            </span>
          )}
        </div>

        {prompt.subtopic && (
          <span className="text-[11px] font-medium text-gray-500 block truncate">
            {prompt.subtopic}
          </span>
        )}

        <h3 className="font-heading text-lg font-semibold leading-snug text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
          {prompt.title}
        </h3>

        <p className="text-sm text-[var(--color-text-secondary)] line-clamp-3 leading-relaxed">
          {prompt.purpose || prompt.description}
        </p>
      </div>

      <div className="pt-4 mt-4 border-t border-[var(--color-border)] flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          {prompt.timeSaved || prompt.duration || "5–10 mins"}
        </span>

        {prompt.revenuePotential ? (
          <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
            {prompt.revenuePotential}
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
            <span>View</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        )}
      </div>
    </Card>
  );
};
