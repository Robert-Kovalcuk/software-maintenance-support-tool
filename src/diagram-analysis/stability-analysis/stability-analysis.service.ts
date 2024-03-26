import { Injectable } from '@nestjs/common';
import Relationship from "../Relationship";

@Injectable()
export class StabilityAnalysisService {

	public calculateStability(relationships: Relationship[]): Map<string, number> {
		const fanIn = new Map<string, number>();
		const fanOut = new Map<string, number>();
		const stability = new Map<string, number>();

		// Initialize fan-in and fan-out counts
		relationships.forEach(rel => {
			fanIn.set(rel.to, (fanIn.get(rel.to) || 0) + 1);
			fanOut.set(rel.from, (fanOut.get(rel.from) || 0) + 1);
		});

		// Calculate stability for each entity
		[...new Set([...fanIn.keys(), ...fanOut.keys()])].forEach(entity => {
			const inCount = fanIn.get(entity) || 0;
			const outCount = fanOut.get(entity) || 0;
			const stabilityScore = inCount / (inCount + outCount) || 0; // Avoid division by zero
			stability.set(entity, stabilityScore);
		});

		return stability;
	}
}
