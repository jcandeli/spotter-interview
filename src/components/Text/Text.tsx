import React from "react";
import styled from "@emotion/styled";

interface TextProps {
  children: React.ReactNode;
  variant?: "body" | "heading";
  as?: "span" | "p" | "h1" | "h2" | "h3";
  id?: string;
  style?: React.CSSProperties; // allow for overriding default styles
}

const StyledText = styled.span<{
  variant: TextProps["variant"];
  as?: TextProps["as"];
  id?: string;
  style?: React.CSSProperties;
}>`
  ${({ variant }) => {
    switch (variant) {
      case "heading":
        return `
          font-size: 2.5rem;
          font-weight: 400;
          margin: 0;
          color: var(--primary-color);
        `;
      default:
        return `
          font-size: 2.5rem;
          color: var(--primary-color);
        `;
    }
  }}
`;

export const Text = ({
  children,
  variant = "body",
  as,
  id,
  style,
}: TextProps) => (
  <StyledText variant={variant} as={as} id={id} style={style}>
    {children}
  </StyledText>
);
