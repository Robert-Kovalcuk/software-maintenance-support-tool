import { Module } from '@nestjs/common';
import { ClassMergerService } from './mergers/class-merger/class-merger.service';
import { InterfaceMergerService } from './mergers/interface-merger/interface-merger.service';
import {ErdMergerService} from "./mergers/erd-merger/erd-merger.service"
import {ComponentMergerService} from "./mergers/component-merger/component-merger.service"

@Module({
  providers: [ClassMergerService, InterfaceMergerService, ErdMergerService, ComponentMergerService],
  exports: [ClassMergerService, InterfaceMergerService, ErdMergerService, ComponentMergerService],
})
export class DiagramAnalysisModule {}
