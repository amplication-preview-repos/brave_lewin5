import { Module } from "@nestjs/common";
import { BehaviorAnalysisService } from "./behavioranalysis.service";
import { BehaviorAnalysisController } from "./behavioranalysis.controller";
import { BehaviorAnalysisResolver } from "./behavioranalysis.resolver";

@Module({
  controllers: [BehaviorAnalysisController],
  providers: [BehaviorAnalysisService, BehaviorAnalysisResolver],
  exports: [BehaviorAnalysisService],
})
export class BehaviorAnalysisModule {}
