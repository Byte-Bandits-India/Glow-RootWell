import React from "react";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className = "",
}) => {
  const isDark = theme === "dark";
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignClass} ${className}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-3 ${
            isDark
              ? "bg-[rgba(16,185,130,0.18)] text-[var(--color-accent)] border border-[rgba(16,185,130,0.3)]"
              : "bg-[var(--color-secondary)] text-[var(--color-text-primary)] border border-[var(--color-border-sage)]"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.12] mb-4 ${
          isDark ? "text-[var(--color-text-inverse)]" : "text-[var(--color-text-primary)]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            isDark ? "text-[var(--color-secondary)]/85" : "text-[var(--color-text-secondary)]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
