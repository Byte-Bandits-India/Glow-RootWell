import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ leftIcon, rightIcon, error, label, className = "", id, ...rest }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label
            htmlFor={id}
            className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-3.5 text-[var(--color-text-secondary)] pointer-events-none flex items-center justify-center">
              {leftIcon}
            </div>
          )}
          <input
            id={id}
            ref={ref}
            className={`w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-input)] py-3 px-4 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[rgba(16,185,130,0.2)] transition-all ${
              leftIcon ? "pl-11" : ""
            } ${rightIcon ? "pr-11" : ""} ${
              error ? "border-red-500 ring-1 ring-red-200" : ""
            } ${className}`}
            {...rest}
          />
          {rightIcon && (
            <div className="absolute right-3.5 text-[var(--color-text-secondary)] flex items-center justify-center">
              {rightIcon}
            </div>
          )}
        </div>
        {error && <span className="text-xs text-red-600 font-medium">{error}</span>}
      </div>
    );
  }
);
Input.displayName = "Input";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  leftIcon?: React.ReactNode;
  options: { label: string; value: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, leftIcon, options, id, className = "", ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 text-left">
        {label && (
          <label
            htmlFor={id}
            className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-3.5 text-[var(--color-text-secondary)] pointer-events-none flex items-center justify-center">
              {leftIcon}
            </div>
          )}
          <select
            id={id}
            ref={ref}
            className={`w-full appearance-none bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-input)] py-3 pl-4 pr-10 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[rgba(16,185,130,0.2)] cursor-pointer transition-all ${
              leftIcon ? "pl-11" : ""
            } ${className}`}
            {...rest}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3.5 pointer-events-none text-[var(--color-text-secondary)]">
            <svg
              className="w-4 h-4 fill-none stroke-currentColor stroke-2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
);
Select.displayName = "Select";
