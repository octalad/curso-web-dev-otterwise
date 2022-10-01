import { format } from "date-fns";

export const formatDate = (day, month, year) => {
  console.log(format(new Date(year, month - 1, day), "d/M/y"));
};

formatDate(30, 9, 2022);
