import * as graphql from "@nestjs/graphql";
import { Pattern } from "../pattern/base/Pattern";
import { CreateBehaviorInput } from "../behaviorAnalysis/CreateBehaviorInput";
import { Behavior } from "../behavior/base/Behavior";
import { BehaviorAnalysisService } from "./behavioranalysis.service";

export class BehaviorAnalysisResolver {
  constructor(protected readonly service: BehaviorAnalysisService) {}

  @graphql.Query(() => Pattern)
  async IdentifyPatterns(
    @graphql.Args("args")
    args: string
  ): Promise<Pattern> {
    return this.service.IdentifyPatterns(args);
  }

  @graphql.Mutation(() => Behavior)
  async IntakeBehaviorData(
    @graphql.Args()
    args: CreateBehaviorInput
  ): Promise<Behavior> {
    return this.service.IntakeBehaviorData(args);
  }
}
