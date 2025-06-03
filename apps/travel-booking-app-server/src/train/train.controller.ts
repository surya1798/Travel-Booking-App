import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TrainService } from "./train.service";
import { TrainControllerBase } from "./base/train.controller.base";

@swagger.ApiTags("trains")
@common.Controller("trains")
export class TrainController extends TrainControllerBase {
  constructor(protected readonly service: TrainService) {
    super(service);
  }
}
