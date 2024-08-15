import * as graphql from "@nestjs/graphql";
import { BehaviorResolverBase } from "./base/behavior.resolver.base";
import { Behavior } from "./base/Behavior";
import { BehaviorService } from "./behavior.service";

@graphql.Resolver(() => Behavior)
export class BehaviorResolver extends BehaviorResolverBase {
  constructor(protected readonly service: BehaviorService) {
    super(service);
  }
}
