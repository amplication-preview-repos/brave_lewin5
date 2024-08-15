import { PatternWhereInput } from "./PatternWhereInput";
import { PatternOrderByInput } from "./PatternOrderByInput";

export type PatternFindManyArgs = {
  where?: PatternWhereInput;
  orderBy?: Array<PatternOrderByInput>;
  skip?: number;
  take?: number;
};
