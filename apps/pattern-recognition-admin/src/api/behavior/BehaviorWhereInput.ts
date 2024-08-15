import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type BehaviorWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  occurredAt?: DateTimeNullableFilter;
  patient?: PatientWhereUniqueInput;
};
