import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "surface" | "sage" | "forest" | "moss" | "ghost";
  interactive?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = "surface",
  interactive = false,
  padding = "md",
  children,
  className = "",
  ...rest
}) => {
  const baseClasses = "rounded-[var(--radius-card)] transition-all duration-[var(--transition-fast)] relative";

  const variantClasses = {
    surface:
      "bg-[var(--color-surface)] text-[var(--color-text-primary)] border border-[var(--color-border)] shadow-[var(--shadow-card)]",
    sage:
      "bg-[var(--color-secondary)] text-[var(--color-text-primary)] border border-[var(--color-border-sage)]",
    forest:
      "bg-[var(--color-primary)] text-[var(--color-text-inverse)] border border-[var(--color-border-dark)] shadow-[var(--shadow-dark)]",
    moss:
      "bg-[var(--color-surface-dark)] text-[var(--color-text-inverse)] border border-[var(--color-border-dark)]",
    ghost:
      "bg-transparent border border-[var(--color-border)]",
  };

  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8 md:p-10",
  };

  const hoverClasses = interactive
    ? "hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] cursor-pointer"
    : "";

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${hoverClasses} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};
