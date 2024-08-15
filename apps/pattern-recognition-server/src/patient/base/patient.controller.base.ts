/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PatientService } from "../patient.service";
import { PatientCreateInput } from "./PatientCreateInput";
import { Patient } from "./Patient";
import { PatientFindManyArgs } from "./PatientFindManyArgs";
import { PatientWhereUniqueInput } from "./PatientWhereUniqueInput";
import { PatientUpdateInput } from "./PatientUpdateInput";
import { BehaviorFindManyArgs } from "../../behavior/base/BehaviorFindManyArgs";
import { Behavior } from "../../behavior/base/Behavior";
import { BehaviorWhereUniqueInput } from "../../behavior/base/BehaviorWhereUniqueInput";
import { PatternFindManyArgs } from "../../pattern/base/PatternFindManyArgs";
import { Pattern } from "../../pattern/base/Pattern";
import { PatternWhereUniqueInput } from "../../pattern/base/PatternWhereUniqueInput";

export class PatientControllerBase {
  constructor(protected readonly service: PatientService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Patient })
  async createPatient(
    @common.Body() data: PatientCreateInput
  ): Promise<Patient> {
    return await this.service.createPatient({
      data: data,
      select: {
        age: true,
        createdAt: true,
        id: true,
        name: true,
        sex: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Patient] })
  @ApiNestedQuery(PatientFindManyArgs)
  async patients(@common.Req() request: Request): Promise<Patient[]> {
    const args = plainToClass(PatientFindManyArgs, request.query);
    return this.service.patients({
      ...args,
      select: {
        age: true,
        createdAt: true,
        id: true,
        name: true,
        sex: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Patient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async patient(
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<Patient | null> {
    const result = await this.service.patient({
      where: params,
      select: {
        age: true,
        createdAt: true,
        id: true,
        name: true,
        sex: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Patient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePatient(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() data: PatientUpdateInput
  ): Promise<Patient | null> {
    try {
      return await this.service.updatePatient({
        where: params,
        data: data,
        select: {
          age: true,
          createdAt: true,
          id: true,
          name: true,
          sex: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Patient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePatient(
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<Patient | null> {
    try {
      return await this.service.deletePatient({
        where: params,
        select: {
          age: true,
          createdAt: true,
          id: true,
          name: true,
          sex: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/behaviors")
  @ApiNestedQuery(BehaviorFindManyArgs)
  async findBehaviors(
    @common.Req() request: Request,
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<Behavior[]> {
    const query = plainToClass(BehaviorFindManyArgs, request.query);
    const results = await this.service.findBehaviors(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        id: true,
        occurredAt: true,

        patient: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/behaviors")
  async connectBehaviors(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: BehaviorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      behaviors: {
        connect: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/behaviors")
  async updateBehaviors(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: BehaviorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      behaviors: {
        set: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/behaviors")
  async disconnectBehaviors(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: BehaviorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      behaviors: {
        disconnect: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/patterns")
  @ApiNestedQuery(PatternFindManyArgs)
  async findPatterns(
    @common.Req() request: Request,
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<Pattern[]> {
    const query = plainToClass(PatternFindManyArgs, request.query);
    const results = await this.service.findPatterns(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,

        patient: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/patterns")
  async connectPatterns(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: PatternWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      patterns: {
        connect: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/patterns")
  async updatePatterns(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: PatternWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      patterns: {
        set: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/patterns")
  async disconnectPatterns(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: PatternWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      patterns: {
        disconnect: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }
}
