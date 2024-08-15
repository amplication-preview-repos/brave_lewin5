import { BehaviorCreateNestedManyWithoutPatientsInput } from "./BehaviorCreateNestedManyWithoutPatientsInput";
import { PatternCreateNestedManyWithoutPatientsInput } from "./PatternCreateNestedManyWithoutPatientsInput";

export type PatientCreateInput = {
  age?: number | null;
  behaviors?: BehaviorCreateNestedManyWithoutPatientsInput;
  name?: string | null;
  patterns?: PatternCreateNestedManyWithoutPatientsInput;
  sex?: string | null;
};
