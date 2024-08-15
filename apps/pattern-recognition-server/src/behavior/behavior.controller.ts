import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BehaviorService } from "./behavior.service";
import { BehaviorControllerBase } from "./base/behavior.controller.base";

@swagger.ApiTags("behaviors")
@common.Controller("behaviors")
export class BehaviorController extends BehaviorControllerBase {
  constructor(protected readonly service: BehaviorService) {
    super(service);
  }
}
