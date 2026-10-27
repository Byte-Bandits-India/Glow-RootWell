import React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "default" | "narrow" | "wide";
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = "default",
  className = "",
  ...rest
}) => {
  const sizeClasses = {
    default: "w-[90%] 2xl:w-full 2xl:max-w-[1440px]",
    narrow: "w-[90%] max-w-3xl",
    wide: "w-[90%] 2xl:w-full 2xl:max-w-[1600px]",
  };

  return (
    <div
      className={`${sizeClasses[size]} mx-auto ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};
