import * as graphql from "@nestjs/graphql";
import { TrainResolverBase } from "./base/train.resolver.base";
import { Train } from "./base/Train";
import { TrainService } from "./train.service";

@graphql.Resolver(() => Train)
export class TrainResolver extends TrainResolverBase {
  constructor(protected readonly service: TrainService) {
    super(service);
  }
}
