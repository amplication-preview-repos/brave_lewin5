import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type BehaviorUpdateInput = {
  description?: string | null;
  occurredAt?: Date | null;
  patient?: PatientWhereUniqueInput | null;
};
