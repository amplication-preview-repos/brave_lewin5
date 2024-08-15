import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PatternServiceBase } from "./base/pattern.service.base";

@Injectable()
export class PatternService extends PatternServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
