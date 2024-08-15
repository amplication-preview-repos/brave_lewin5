import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type PatternUpdateInput = {
  description?: string | null;
  name?: string | null;
  patient?: PatientWhereUniqueInput | null;
};
