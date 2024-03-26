import { Injectable } from '@nestjs/common';
import {DependencyChainAnalysisService} from "../dependency-chain-analysis/dependency-chain-analysis.service";
import {FanAnalysisService} from "../fan-analysis/fan-analysis.service";
import {OrphanAnalysisService} from "../orphan-analysis/orphan-analysis.service";
import {StabilityAnalysisService} from "../stability-analysis/stability-analysis.service";
import Relationship from "../Relationship";
import {RelationshipExtractorService} from "../relationship-extractor/relationship-extractor.service";


@Injectable()
export class DependencyAnalysisService {
	constructor(
		private readonly dependencyChainService: DependencyChainAnalysisService,
		private readonly fanAnalysisService: FanAnalysisService,
		private readonly orphanAnalysisService: OrphanAnalysisService,
		private readonly stabilityAnalysisService: StabilityAnalysisService,
		private readonly relationshipExtractor: RelationshipExtractorService,
	) {}

	analyzeDependencies(relationships: Relationship[]) {
		this.relationshipExtractor.fromComponentDiagram()
		// Example usage of one of the injected services
		const fanMetrics = this.fanAnalysisService.analyze(relationships);
		console.log(fanMetrics);

		// You can similarly use dependencyChainService, orphanAnalysisService, and stabilityAnalysisService
		// to perform other analyses as needed, combining their outputs or using them independently
	}

	// You can create more methods here that use the injected services for specific analyses
}
