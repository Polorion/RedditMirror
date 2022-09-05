export const currentDate = (sec: number): string => {
  if (typeof sec !== "number") return "";

  const ms = sec * 1000;
  return String(new Date(ms));
};
