import { Module } from "@nestjs/common";
import { BehaviorModuleBase } from "./base/behavior.module.base";
import { BehaviorService } from "./behavior.service";
import { BehaviorController } from "./behavior.controller";
import { BehaviorResolver } from "./behavior.resolver";

@Module({
  imports: [BehaviorModuleBase],
  controllers: [BehaviorController],
  providers: [BehaviorService, BehaviorResolver],
  exports: [BehaviorService],
})
export class BehaviorModule {}
