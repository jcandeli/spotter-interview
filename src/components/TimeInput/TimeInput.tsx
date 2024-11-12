import React from "react";

interface TimeInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const TimeInput: React.FC<TimeInputProps> = ({ value, onChange }) => {
  return (
    <input
      type="time"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
