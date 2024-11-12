import React from "react";

interface RadialProgressBarProps {
  progress: number; // 0 to 100
}

export const RadialProgressBar: React.FC<RadialProgressBarProps> = ({
  progress,
}) => {
  return (
    <div className="radial-progress">
      {/* Implementation details will be added later */}
      {progress}%
    </div>
  );
};
