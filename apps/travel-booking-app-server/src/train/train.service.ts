import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TrainServiceBase } from "./base/train.service.base";

@Injectable()
export class TrainService extends TrainServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
