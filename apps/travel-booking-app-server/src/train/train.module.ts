import { Module } from "@nestjs/common";
import { TrainModuleBase } from "./base/train.module.base";
import { TrainService } from "./train.service";
import { TrainController } from "./train.controller";
import { TrainResolver } from "./train.resolver";

@Module({
  imports: [TrainModuleBase],
  controllers: [TrainController],
  providers: [TrainService, TrainResolver],
  exports: [TrainService],
})
export class TrainModule {}
