import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type PatternWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  patient?: PatientWhereUniqueInput;
};
