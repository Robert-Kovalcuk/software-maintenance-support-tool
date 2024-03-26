import { Injectable } from '@nestjs/common';
import Relationship from "../Relationship";

@Injectable()
export class ImpactAnalysisService {

	// Method to initiate the impact analysis for a given entity
	public analyzeImpact(relationships: Relationship[], targetEntity: string): string[] {
		const graph = this.buildGraph(relationships);
		const impactedEntities = new Set<string>();

		// Perform a DFS or BFS from the target entity to find all entities that could be impacted by changes to it
		this.dfs(graph, targetEntity, impactedEntities);

		// Convert the impacted entities set to an array and return it
		return Array.from(impactedEntities);
	}

	// Helper method to build the graph from relationships
	private buildGraph(relationships: Relationship[]): Map<string, string[]> {
		const graph = new Map<string, string[]>();
		relationships.forEach(rel => {
			if (!graph.has(rel.from)) {
				graph.set(rel.from, []);
			}
			graph.get(rel.from)!.push(rel.to);
		});
		return graph;
	}

	// DFS to identify all entities impacted by changes to the target entity
	private dfs(graph: Map<string, string[]>, node: string, impactedEntities: Set<string>) {
		if (impactedEntities.has(node)) {
			// If the node is already visited, return to avoid infinite loops in cyclic dependencies
			return;
		}
		impactedEntities.add(node);

		const neighbors = graph.get(node) || [];
		neighbors.forEach(neighbor => {
			this.dfs(graph, neighbor, impactedEntities);
		});
	}
}
