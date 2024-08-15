import * as graphql from "@nestjs/graphql";
import { PatternResolverBase } from "./base/pattern.resolver.base";
import { Pattern } from "./base/Pattern";
import { PatternService } from "./pattern.service";

@graphql.Resolver(() => Pattern)
export class PatternResolver extends PatternResolverBase {
  constructor(protected readonly service: PatternService) {
    super(service);
  }
}
