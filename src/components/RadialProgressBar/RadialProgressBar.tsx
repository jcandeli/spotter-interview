interface RadialProgressBarProps {
  progress: number; // 0 to 100
}

export const RadialProgressBar = ({ progress }: RadialProgressBarProps) => {
  return (
    <div className="radial-progress">
      {/* Implementation details will be added later */}
      {progress}%
    </div>
  );
};
