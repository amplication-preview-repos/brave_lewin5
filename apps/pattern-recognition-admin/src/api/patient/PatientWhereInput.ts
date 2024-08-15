import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BehaviorListRelationFilter } from "../behavior/BehaviorListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PatternListRelationFilter } from "../pattern/PatternListRelationFilter";

export type PatientWhereInput = {
  age?: IntNullableFilter;
  behaviors?: BehaviorListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  patterns?: PatternListRelationFilter;
  sex?: StringNullableFilter;
};
