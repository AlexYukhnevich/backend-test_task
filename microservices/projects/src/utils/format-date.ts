import moment from "moment";

export const createDateFromString = (dateString: string) => new Date(dateString);
export const normalizeDate = (date: Date | null, formatter = "YYYY-MM-DD") => !date ? null : moment(date).format(formatter);
