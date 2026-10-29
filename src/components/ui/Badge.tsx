import React from "react";
import { Sparkles, HeartHandshake, Apple, Activity, Check, Star, ShieldCheck, TrendingUp, Clock } from "lucide-react";

export type BadgeVariant =
  | "fat_loss"
  | "sales"
  | "content"
  | "delivery"
  | "productivity"
  | "skin"
  | "gut"
  | "nutrition"
  | "fitness"
  | "free"
  | "starter"
  | "pro"
  | "teal"
  | "default"
  | (string & {});

export interface BadgeProps {
  variant?: BadgeVariant;
  children?: React.ReactNode;
  icon?: boolean;
  size?: "sm" | "md";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  children,
  icon = true,
  size = "sm",
  className = "",
}) => {
  const sizeClasses = size === "sm" ? "text-xs px-2.5 py-1" : "text-sm px-3.5 py-1.5";

  const getVariantStyles = () => {
    switch (variant) {
      case "fat_loss":
        return {
          classes: "bg-[#FCE7E1] text-[#7F2F1B] border border-[#F3C5BA]",
          icon: <Activity className="w-3.5 h-3.5 shrink-0" />,
          label: "Fat Loss & Metabolism",
        };
      case "sales":
        return {
          classes: "bg-[#F9EBBF] text-[#694E0E] border border-[#EEDB9F]",
          icon: <TrendingUp className="w-3.5 h-3.5 shrink-0" />,
          label: "Sales & Conversion",
        };
      case "content":
        return {
          classes: "bg-[#EAEFFD] text-[#2E3F9B] border border-[#C5D3FB]",
          icon: <Sparkles className="w-3.5 h-3.5 shrink-0" />,
          label: "Content & Brand",
        };
      case "delivery":
        return {
          classes: "bg-[#DDEED0] text-[#244E16] border border-[#C2DCAD]",
          icon: <HeartHandshake className="w-3.5 h-3.5 shrink-0" />,
          label: "Client Transformation",
        };
      case "productivity":
        return {
          classes: "bg-[#D1EBE2] text-[#134F43] border border-[#B1DDD0]",
          icon: <Clock className="w-3.5 h-3.5 shrink-0" />,
          label: "Productivity & Focus",
        };
      case "skin":
        return {
          classes: "bg-[#FCE7E1] text-[#7F2F1B] border border-[#F3C5BA]",
          icon: <Sparkles className="w-3.5 h-3.5 shrink-0" />,
          label: "Skin",
        };
      case "gut":
        return {
          classes: "bg-[#DDEED0] text-[#244E16] border border-[#C2DCAD]",
          icon: <HeartHandshake className="w-3.5 h-3.5 shrink-0" />,
          label: "Gut health",
        };
      case "nutrition":
        return {
          classes: "bg-[#F9EBBF] text-[#694E0E] border border-[#EEDB9F]",
          icon: <Apple className="w-3.5 h-3.5 shrink-0" />,
          label: "Nutrition",
        };
      case "fitness":
        return {
          classes: "bg-[#D1EBE2] text-[#134F43] border border-[#B1DDD0]",
          icon: <Activity className="w-3.5 h-3.5 shrink-0" />,
          label: "Fitness",
        };
      case "free":
        return {
          classes: "bg-[#E6F4EA] text-[#1E7A46] border border-[#BCE4C9] font-semibold",
          icon: <Check className="w-3.5 h-3.5 shrink-0" />,
          label: "Free",
        };
      case "starter":
        return {
          classes: "bg-[#EAEFFD] text-[#2E3F9B] border border-[#C5D3FB] font-semibold",
          icon: <Star className="w-3.5 h-3.5 shrink-0" />,
          label: "Starter",
        };
      case "pro":
        return {
          classes: "bg-[#FDF0CE] text-[#7D4F00] border border-[#F5DC96] font-semibold",
          icon: <ShieldCheck className="w-3.5 h-3.5 shrink-0" />,
          label: "Pro",
        };
      case "teal":
        return {
          classes: "bg-[rgba(16,185,130,0.14)] text-[var(--color-primary)] border border-[rgba(16,185,130,0.3)] font-semibold",
          icon: null,
          label: "",
        };
      default:
        return {
          classes: "bg-[var(--color-background)] text-[var(--color-text-secondary)] border border-[var(--color-border)]",
          icon: null,
          label: "",
        };
    }
  };

  const config = getVariantStyles();

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-[var(--radius-badge)] font-medium leading-none ${sizeClasses} ${config.classes} ${className}`}
    >
      {icon && config.icon}
      <span>{children || config.label}</span>
    </span>
  );
};
