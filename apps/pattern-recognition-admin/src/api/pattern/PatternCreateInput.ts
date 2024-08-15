import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type PatternCreateInput = {
  description?: string | null;
  name?: string | null;
  patient?: PatientWhereUniqueInput | null;
};
