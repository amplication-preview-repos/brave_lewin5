import { Pattern as TPattern } from "../api/pattern/Pattern";

export const PATTERN_TITLE_FIELD = "name";

export const PatternTitle = (record: TPattern): string => {
  return record.name?.toString() || String(record.id);
};
