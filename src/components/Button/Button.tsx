import styled from "@emotion/styled";
import { PauseIcon, PlayIcon, XIcon } from "lucide-react";
import React from "react";
import Text from "../Text";

interface BaseButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
}

interface IconButtonProps extends BaseButtonProps {
  variation: "icon";
  icon: "pause" | "close" | "play";
}

interface InvisibleButtonProps extends BaseButtonProps {
  variation: "invisible";
  icon?: never;
}

type ButtonProps = IconButtonProps | InvisibleButtonProps;

const StyledButton = styled.button<{ variation: ButtonProps["variation"] }>`
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

  ${({ variation }) =>
    variation === "icon" &&
    `
    color: var(--primary-color);
    background-color: var(--secondary-color);
    border-radius: 50%;
    padding: 16px 17px;
    border: none;
    line-height: 1;
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
    >
      {variation === "icon" && getIcon()}
      {variation === "icon" ? (
        <span className="sr-only">{children}</span>
      ) : (
        <Text variant="body">{children}</Text>
      )}
    </StyledButton>
  );
};
