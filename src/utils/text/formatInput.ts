import { capitalize } from "lodash";
import { startCase } from "lodash/fp";

export const formatEnum = (val: string): string => {
  if (val === "MIN_MAX") return "Min/Max";

  return startCase(val.toLowerCase());
};

export const formatSetence = (val: string): string => {
  const valArray = val
    .replace("?", "?#")
    .replace(".", ".#")
    .replace("!", "!#")
    .replace(";", ";#")
    .split("#");

  return valArray.map((v) => capitalize(v.trim())).join(" ");
};
