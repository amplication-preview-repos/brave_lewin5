import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { Patient } from "../patient/base/Patient";

@ArgsType()
class CreateBehaviorInput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    description!: string;

    @Field(() => Date)
    @Type(() => Date)
    occurredAt!: Date;

    @Field(() => Patient)
    @ApiProperty({
        required: true,
        type: () => Patient
    })
    @Type(() => Patient)
    Patient!: Patient;
}

export { CreateBehaviorInput as CreateBehaviorInput };