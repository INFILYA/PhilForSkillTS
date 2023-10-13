type TOptions = {
  hour: "numeric" | "2-digit" | undefined;
  minute: "numeric" | "2-digit" | undefined;
  second: "numeric" | "2-digit" | undefined;
  day: "numeric" | "2-digit" | undefined;
  month: "numeric" | "2-digit" | "short" | "long" | "narrow" | undefined;
  year: "numeric" | "2-digit" | undefined;
};
const date = new Date();
const options: TOptions = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  day: "numeric",
  month: "short",
  year: "numeric",
};

export const Time = date.toLocaleDateString("en-GB", options);
