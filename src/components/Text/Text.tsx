import React from "react";
import styled from "@emotion/styled";

interface TextProps {
  children: React.ReactNode;
  variant?: "body" | "heading";
  as?: "span" | "p" | "h1" | "h2" | "h3";
  id?: string;
}

const StyledText = styled.span<{
  variant: TextProps["variant"];
  as?: TextProps["as"];
  id?: string;
}>`
  ${({ variant }) => {
    switch (variant) {
      case "heading":
        return `
          font-size: 1.5rem;
          font-weight: bold;
        `;
      default:
        return `
          font-size: 1rem;
        `;
    }
  }}
`;

export const Text = ({ children, variant = "body", as, id }: TextProps) => (
  <StyledText variant={variant} as={as} id={id}>
    {children}
  </StyledText>
);
