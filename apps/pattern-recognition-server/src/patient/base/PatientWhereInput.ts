/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { BehaviorListRelationFilter } from "../../behavior/base/BehaviorListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PatternListRelationFilter } from "../../pattern/base/PatternListRelationFilter";

@InputType()
class PatientWhereInput {
  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  age?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: () => BehaviorListRelationFilter,
  })
  @ValidateNested()
  @Type(() => BehaviorListRelationFilter)
  @IsOptional()
  @Field(() => BehaviorListRelationFilter, {
    nullable: true,
  })
  behaviors?: BehaviorListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => PatternListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PatternListRelationFilter)
  @IsOptional()
  @Field(() => PatternListRelationFilter, {
    nullable: true,
  })
  patterns?: PatternListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  sex?: StringNullableFilter;
}

export { PatientWhereInput as PatientWhereInput };
