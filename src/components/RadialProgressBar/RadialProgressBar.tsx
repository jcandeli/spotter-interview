import styled from "@emotion/styled";

interface RadialProgressBarProps {
  progress: number; // 0 to 100
}

const ProgressBar = styled.svg`
  rotate: -90deg;
  z-index: 1;
`;

const Progress = styled.circle`
  stroke: var(--primary-color);
  transition: stroke-dashoffset 1s linear;
`;

export const RadialProgressBar = ({ progress }: RadialProgressBarProps) => {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <ProgressBar viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke={`var(--secondary-color)`}
        strokeWidth="4"
        fill="none"
      />
      <Progress
        cx="50"
        cy="50"
        r={radius}
        stroke={`var(--primary-color)`}
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
      />
    </ProgressBar>
  );
};
