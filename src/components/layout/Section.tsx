import React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "ivory" | "forest" | "sage" | "white" | "moss";
  padding?: "none" | "sm" | "default" | "lg";
  withPattern?: boolean;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  variant = "ivory",
  padding = "default",
  withPattern = false,
  children,
  className = "",
  ...rest
}) => {
  const variantClasses = {
    ivory: "bg-[var(--color-background)] text-[var(--color-text-primary)]",
    forest: "bg-[var(--color-primary)] text-[var(--color-text-inverse)]",
    sage: "bg-[var(--color-secondary)] text-[var(--color-text-primary)]",
    white: "bg-[var(--color-surface)] text-[var(--color-text-primary)]",
    moss: "bg-[var(--color-surface-dark)] text-[var(--color-text-inverse)]",
  };

  const paddingClasses = {
    none: "",
    sm: "py-10 md:py-14",
    default: "py-16 md:py-24",
    lg: "py-20 md:py-32",
  };

  return (
    <section
      className={`relative overflow-hidden transition-colors duration-300 ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`}
      {...rest}
    >
      {withPattern && (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-5 mix-blend-overlay bg-[radial-gradient(#10B982_1px,transparent_1px)] [background-size:24px_24px]"
        />
      )}
      {children}
    </section>
  );
};
