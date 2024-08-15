import { Injectable } from "@nestjs/common";
import { Pattern } from "../pattern/base/Pattern";
import { CreateBehaviorInput } from "../behaviorAnalysis/CreateBehaviorInput";
import { Behavior } from "../behavior/base/Behavior";

@Injectable()
export class BehaviorAnalysisService {
  constructor() {}
  async IdentifyPatterns(args: string): Promise<Pattern> {
    throw new Error("Not implemented");
  }
  async IntakeBehaviorData(args: CreateBehaviorInput): Promise<Behavior> {
    throw new Error("Not implemented");
  }
}
