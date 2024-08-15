import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type BehaviorCreateInput = {
  description?: string | null;
  occurredAt?: Date | null;
  patient?: PatientWhereUniqueInput | null;
};
