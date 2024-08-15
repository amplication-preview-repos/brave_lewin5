import { Behavior as TBehavior } from "../api/behavior/Behavior";

export const BEHAVIOR_TITLE_FIELD = "id";

export const BehaviorTitle = (record: TBehavior): string => {
  return record.id?.toString() || String(record.id);
};
