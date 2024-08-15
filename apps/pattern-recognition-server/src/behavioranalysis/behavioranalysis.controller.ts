import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { BehaviorAnalysisService } from "./behavioranalysis.service";
import { CreateBehaviorInput } from "../behaviorAnalysis/CreateBehaviorInput";
import { Pattern } from "../pattern/base/Pattern";
import { Behavior } from "../behavior/base/Behavior";

@swagger.ApiTags("behaviorAnalyses")
@common.Controller("behaviorAnalyses")
export class BehaviorAnalysisController {
  constructor(protected readonly service: BehaviorAnalysisService) {}

  @common.Get("/patterns/:patientId")
  @swagger.ApiOkResponse({
    type: Pattern
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async IdentifyPatterns(
    @common.Body()
    body: CreateBehaviorInput
  ): Promise<Pattern> {
        return this.service.IdentifyPatterns(body);
      }

  @common.Post("/intake")
  @swagger.ApiOkResponse({
    type: Behavior
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async IntakeBehaviorData(
    @common.Body()
    body: CreateBehaviorInput
  ): Promise<Behavior> {
        return this.service.IntakeBehaviorData(body);
      }
}
