type Resp = { hours: number; minutes: number };

export const parseRuntime = (totalMinutes: number): Resp => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return { hours, minutes };
};
