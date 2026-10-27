import React from "react";
import { SearchX } from "lucide-react";
import { Button } from "../ui/Button";

export interface EmptyStateProps {
  title?: string;
  description?: string;
  actionText?: string;
  onAction?: () => void;
  icon?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No prompts found",
  description = "Try adjusting your search terms or filters to find what you are looking for.",
  actionText = "Clear all filters",
  onAction,
  icon = <SearchX className="w-10 h-10 text-[var(--color-text-secondary)]" />,
}) => {
  return (
    <div className="w-full py-16 px-6 text-center flex flex-col items-center justify-center bg-[var(--color-surface)] border border-dashed border-[var(--color-border)] rounded-[var(--radius-card)]">
      <div className="w-16 h-16 rounded-full bg-[var(--color-background)] flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-heading text-xl font-semibold text-[var(--color-text-primary)] mb-2">
        {title}
      </h3>
      <p className="text-sm text-[var(--color-text-secondary)] max-w-md mb-6 leading-relaxed">
        {description}
      </p>
      {onAction && (
        <Button variant="outline" size="sm" onClick={onAction}>
          {actionText}
        </Button>
      )}
    </div>
  );
};
