import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PatternService } from "./pattern.service";
import { PatternControllerBase } from "./base/pattern.controller.base";

@swagger.ApiTags("patterns")
@common.Controller("patterns")
export class PatternController extends PatternControllerBase {
  constructor(protected readonly service: PatternService) {
    super(service);
  }
}
