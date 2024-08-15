import { BehaviorUpdateManyWithoutPatientsInput } from "./BehaviorUpdateManyWithoutPatientsInput";
import { PatternUpdateManyWithoutPatientsInput } from "./PatternUpdateManyWithoutPatientsInput";

export type PatientUpdateInput = {
  age?: number | null;
  behaviors?: BehaviorUpdateManyWithoutPatientsInput;
  name?: string | null;
  patterns?: PatternUpdateManyWithoutPatientsInput;
  sex?: string | null;
};
