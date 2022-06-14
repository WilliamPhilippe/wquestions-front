import { startCase } from "lodash/fp";

export const formatEnum = (val: string) => {
  if (val === "MIN_MAX") return "Min/Max";

  return startCase(val.toLowerCase());
};
