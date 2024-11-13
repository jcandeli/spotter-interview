import styled from "@emotion/styled";
import { PauseIcon, PlayIcon, XIcon } from "lucide-react";
import React from "react";
import Text from "../Text";

interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
  variation?: "invisible";
  icon?: "pause" | "close" | "play";
  iconLabel?: string;
}

const StyledButton = styled.button<{ variation?: "invisible" }>`
  color: var(--primary-color);
  background-color: var(--secondary-color);
  border-radius: 50%;
  padding: 16px 17px;
  border: none;
  line-height: 1;

  ${({ variation }) =>
    variation === "invisible" &&
    `
    background: none;
    border: none;
    border-radius: 0.5rem;
    padding: 0;
    color: var(--primary-color);
    cursor: pointer;
  `}

  :focus {
    outline: currentColor dotted 2px;
    outline-offset: 4px;
  }
`;

export const Button = ({
  onClick,
  children,
  disabled,
  variation,
  icon,
  style,
  iconLabel,
}: ButtonProps) => {
  const getIcon = () => {
    if (!icon) return null;
    switch (icon) {
      case "pause":
        return <PauseIcon size={36} />;
      case "close":
        return <XIcon size={32} />;
      case "play":
        return <PlayIcon size={36} />;
      default:
        return null;
    }
  };

  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      variation={variation}
      style={style}
      aria-label={iconLabel}
    >
      {getIcon()}
      {icon ? (
        <span className="sr-only">{children}</span>
      ) : (
        <Text variant="body">{children}</Text>
      )}
    </StyledButton>
  );
};
