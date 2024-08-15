import { BehaviorWhereInput } from "./BehaviorWhereInput";
import { BehaviorOrderByInput } from "./BehaviorOrderByInput";

export type BehaviorFindManyArgs = {
  where?: BehaviorWhereInput;
  orderBy?: Array<BehaviorOrderByInput>;
  skip?: number;
  take?: number;
};
