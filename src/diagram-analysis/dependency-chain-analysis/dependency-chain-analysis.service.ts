import { Injectable } from '@nestjs/common';
import Relationship from "../Relationship";
import GraphAnalyzer from "../GraphAnalyzer";

@Injectable()
export class DependencyChainAnalysisService extends GraphAnalyzer {

	// Method to initiate the analysis and return longest dependency chains as arrays of Relationships
	public analyze(relationships: Relationship[]): Relationship[][] {
		const graph = this.buildGraph(relationships);
		const allPaths: string[][] = []; // Temporarily store paths as strings
		const visited = new Set<string>();
		const tempStack: string[] = [];

		graph.forEach((_, node) => {
			if (!visited.has(node)) {
				this.dfs(node, graph, visited, tempStack, allPaths);
			}
		});

		// Convert string paths to Relationship paths
		return this.convertPathsToRelationships(allPaths, relationships);
	}

	private dfs(node: string, graph: Map<string, string[]>, visited: Set<string>, tempStack: string[], allPaths: string[][]) {
		visited.add(node);
		tempStack.push(node);

		const neighbors = graph.get(node) || [];
		if (neighbors.length === 0) {
			allPaths.push([...tempStack]); // Save the current path when reaching a terminal node
		} else {
			neighbors.forEach(neighbor => {
				if (!visited.has(neighbor)) {
					this.dfs(neighbor, graph, visited, tempStack, allPaths);
				}
			});
		}

		tempStack.pop(); // Backtrack
		visited.delete(node); // Allow re-visiting for other paths
	}

	// Convert string paths to arrays of Relationship objects
	private convertPathsToRelationships(paths: string[][], relationships: Relationship[]): Relationship[][] {
		return paths.map(path => {
			const pathRelationships: Relationship[] = [];
			for (let i = 0; i < path.length - 1; i++) {
				const from = path[i];
				const to = path[i + 1];
				// Find the Relationship that matches this step in the path
				const rel = relationships.find(rel => rel.from === from && rel.to === to);
				if (rel) {
					pathRelationships.push(rel);
				}
			}
			return pathRelationships;
		}).filter(path => path.length > 0); // Filter out any empty paths, just in case
	}
}
