import { Module } from "@nestjs/common";
import { PatternModuleBase } from "./base/pattern.module.base";
import { PatternService } from "./pattern.service";
import { PatternController } from "./pattern.controller";
import { PatternResolver } from "./pattern.resolver";

@Module({
  imports: [PatternModuleBase],
  controllers: [PatternController],
  providers: [PatternService, PatternResolver],
  exports: [PatternService],
})
export class PatternModule {}
