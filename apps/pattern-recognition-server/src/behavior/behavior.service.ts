import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BehaviorServiceBase } from "./base/behavior.service.base";

@Injectable()
export class BehaviorService extends BehaviorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
