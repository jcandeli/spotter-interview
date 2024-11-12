import React from "react";

interface TextProps {
  children: React.ReactNode;
  variant?: "body" | "heading" | "caption";
}

export const Text: React.FC<TextProps> = ({ children, variant = "body" }) => {
  return <span className={`text-${variant}`}>{children}</span>;
};
