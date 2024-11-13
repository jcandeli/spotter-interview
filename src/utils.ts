export const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

export const parseTime = (time: string) => {
  const [minutes, seconds] = time.split(":").map(Number);
  return (minutes * 60 + seconds) * 1000;
};
