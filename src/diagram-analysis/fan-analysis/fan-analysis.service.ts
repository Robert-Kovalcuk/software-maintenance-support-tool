import { Injectable } from '@nestjs/common';
import Relationship from "../Relationship";

@Injectable()
export class FanAnalysisService {

	public analyze(relationships: Relationship[]): { fanIn: Map<string, number>, fanOut: Map<string, number> } {
		const fanIn = new Map<string, number>();
		const fanOut = new Map<string, number>();

		// Initialize maps with all entities to ensure entities with 0 fan-in or fan-out are included
		relationships.forEach(rel => {
			if (!fanIn.has(rel.from)) fanIn.set(rel.from, 0);
			if (!fanIn.has(rel.to)) fanIn.set(rel.to, 0);
			if (!fanOut.has(rel.from)) fanOut.set(rel.from, 0);
			if (!fanOut.has(rel.to)) fanOut.set(rel.to, 0);
		});

		// Calculate fan-in and fan-out
		relationships.forEach(rel => {
			fanIn.set(rel.to, (fanIn.get(rel.to) || 0) + 1);
			fanOut.set(rel.from, (fanOut.get(rel.from) || 0) + 1);
		});

		return { fanIn, fanOut };
	}
}
