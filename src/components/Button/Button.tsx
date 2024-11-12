import React from "react";
import { XIcon, PauseIcon, PlayIcon } from "lucide-react";

interface BaseButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
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

export const Button = ({
  onClick,
  children,
  disabled,
  variation,
  icon,
}: ButtonProps) => {
  const getIcon = () => {
    if (!icon) return null;
    switch (icon) {
      case "pause":
        return <PauseIcon size={16} />;
      case "close":
        return <XIcon size={16} />;
      case "play":
        return <PlayIcon size={16} />;
      default:
        return null;
    }
  };

  const buttonStyle: React.CSSProperties = {
    ...(variation === "invisible" && {
      background: "none",
      border: "none",
      padding: 0,
      color: "inherit",
      textDecoration: "underline",
      cursor: "pointer",
    }),
    ...(variation === "icon" && {
      display: "flex",
      alignItems: "center",
      gap: "8px",
    }),
  };

  return (
    <button onClick={onClick} disabled={disabled} style={buttonStyle}>
      {variation === "icon" && getIcon()}
      {children}
    </button>
  );
};
