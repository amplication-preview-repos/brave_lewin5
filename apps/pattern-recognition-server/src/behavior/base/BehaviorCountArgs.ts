/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BehaviorWhereInput } from "./BehaviorWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class BehaviorCountArgs {
  @ApiProperty({
    required: false,
    type: () => BehaviorWhereInput,
  })
  @Field(() => BehaviorWhereInput, { nullable: true })
  @Type(() => BehaviorWhereInput)
  where?: BehaviorWhereInput;
}

export { BehaviorCountArgs as BehaviorCountArgs };
