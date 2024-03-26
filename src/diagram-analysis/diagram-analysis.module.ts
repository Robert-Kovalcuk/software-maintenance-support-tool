import { Module } from '@nestjs/common';
import { ClassMergerService } from './mergers/class-merger/class-merger.service';
import { InterfaceMergerService } from './mergers/interface-merger/interface-merger.service';
import {ErdMergerService} from "./mergers/erd-merger/erd-merger.service"
import {ComponentMergerService} from "./mergers/component-merger/component-merger.service"
import {DomainModule} from "../domain/domain.module";
import { CyclicAnalysisService } from './cyclic-detection/cyclic-analysis/cyclic-analysis.service';
import { DependencyAnalysisService } from './dependency-analysis/dependency-analysis.service';
import { FanAnalysisService } from './fan-analysis/fan-analysis.service';
import { OrphanAnalysisService } from './orphan-analysis/orphan-analysis.service';
import { ImpactAnalysisService } from './impact-analysis/impact-analysis.service';
import { StabilityAnalysisService } from './stability-analysis/stability-analysis.service';
import { DependencyChainAnalysisService } from './dependency-chain-analysis/dependency-chain-analysis.service';

@Module({
  imports: [DomainModule],
  providers: [ClassMergerService, InterfaceMergerService, ErdMergerService, ComponentMergerService, CyclicAnalysisService, DependencyAnalysisService, FanAnalysisService, OrphanAnalysisService, ImpactAnalysisService, StabilityAnalysisService, DependencyChainAnalysisService],
  exports: [ClassMergerService, InterfaceMergerService, ErdMergerService, ComponentMergerService],
})
export class DiagramAnalysisModule {}
