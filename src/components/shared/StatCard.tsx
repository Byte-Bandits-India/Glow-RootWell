import React from "react";

export interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  variant?: "surface" | "forest" | "sage" | "transparent";
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  description,
  icon,
  variant = "surface",
  className = "",
}) => {
  const variantStyles = {
    surface:
      "bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-primary)] shadow-[var(--shadow-card)]",
    forest:
      "bg-[var(--color-surface-dark)] border border-[var(--color-border-dark)] text-white",
    sage:
      "bg-[var(--color-secondary)] border border-[var(--color-border-sage)] text-[var(--color-text-primary)]",
    transparent:
      "bg-transparent border-none text-inherit",
  };

  return (
    <div
      className={`p-6 rounded-[var(--radius-card)] flex flex-col justify-between transition-all duration-[var(--transition-fast)] ${variantStyles[variant]} ${className}`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="font-heading text-4xl sm:text-5xl font-normal tracking-tight">
          {value}
        </span>
        {icon && (
          <div className="w-10 h-10 rounded-full bg-[rgba(16,185,130,0.15)] text-[var(--color-accent)] flex items-center justify-center shrink-0">
            {icon}
          </div>
        )}
      </div>
      <div>
        <h4 className="font-semibold text-base mb-1">{label}</h4>
        {description && (
          <p className="text-xs opacity-75 leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
};
