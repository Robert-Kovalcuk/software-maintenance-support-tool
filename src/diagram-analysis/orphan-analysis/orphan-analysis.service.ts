import {Injectable} from '@nestjs/common';
import Relationship from "../Relationship";

@Injectable()
export class OrphanAnalysisService {

	public analyze(relationships: Relationship[]): string[] {
		const connectivityMap = new Map<string, number>();

		// Populate the connectivity map
		relationships.forEach(rel => {
			connectivityMap.set(rel.from, (connectivityMap.get(rel.from) || 0) + 1);
			connectivityMap.set(rel.to, (connectivityMap.get(rel.to) || 0) + 1);
		});

		// Identify and return orphans
		return Array.from(connectivityMap.entries())
			.filter(([_, count]) => count === 1) // Orphan criteria might vary; here we assume entities connected only once might be considered weakly connected or orphans.
			.map(([entity, _]) => entity);
	}
}
