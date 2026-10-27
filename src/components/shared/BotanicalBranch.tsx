import React from "react";

export interface BotanicalBranchProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const BotanicalBranch: React.FC<BotanicalBranchProps> = ({
  className = "w-full h-full",
  ...rest
}) => {
  return (
    <svg
      viewBox="0 0 120 240"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      <path
        d="M60 240C58 180 66 110 86 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
      />
      {/* Leaf pairs */}
      <path d="M64 196 C73 182 73 160 64 142 C55 160 55 182 64 196 Z" fill="currentColor" transform="rotate(-30 64 196) scale(0.65)" />
      <path d="M62 190 C71 176 71 154 62 136 C53 154 53 176 62 190 Z" fill="currentColor" transform="rotate(35 62 190) scale(0.65)" />
      <path d="M64 150 C73 136 73 114 64 96 C55 114 55 136 64 150 Z" fill="currentColor" transform="rotate(-35 64 150) scale(0.7)" />
      <path d="M66 142 C75 128 75 106 66 88 C57 106 57 128 66 142 Z" fill="currentColor" transform="rotate(40 66 142) scale(0.7)" />
      <path d="M70 104 C79 90 79 68 70 50 C61 68 61 90 70 104 Z" fill="currentColor" transform="rotate(-30 70 104) scale(0.75)" />
      <path d="M72 96 C81 82 81 60 72 42 C63 60 63 82 72 96 Z" fill="currentColor" transform="rotate(35 72 96) scale(0.75)" />
      <path d="M78 58 C87 44 87 22 78 4 C69 22 69 44 78 58 Z" fill="currentColor" transform="rotate(-25 78 58) scale(0.8)" />
      <path d="M80 50 C89 36 89 14 80 -4 C71 14 71 36 80 50 Z" fill="currentColor" transform="rotate(30 80 50) scale(0.8)" />
      <path d="M86 10 C95 -4 95 -26 86 -44 C77 -26 77 -4 86 10 Z" fill="currentColor" transform="scale(0.85)" />
    </svg>
  );
};
