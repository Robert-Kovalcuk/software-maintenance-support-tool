import {Injectable} from '@nestjs/common';
import Relationship from '../../Relationship';
import GraphAnalyzer from "../../GraphAnalyzer";

@Injectable()
export class CyclicAnalysisService extends GraphAnalyzer {

	public findCycles(relationships: Relationship[]): Relationship[][] {
		const graph = this.buildGraph(relationships);
		const allCycles: string[][] = [];
		this.detectCycles(graph, allCycles);

		// Convert string cycles to Relationship cycles
		return this.convertCyclesToRelationships(allCycles, relationships);
	}

	private detectCycles(graph: Map<string, string[]>, allCycles: string[][]): void {
		const visited = new Map<string, boolean>();
		const recStack = new Map<string, boolean>();
		const pathStack: string[] = [];

		for (let node of graph.keys()) {
			if (!visited.get(node)) {
				this.dfs(node, visited, recStack, graph, pathStack, allCycles);
			}
		}
	}

	private dfs(node: string, visited: Map<string, boolean>, recStack: Map<string, boolean>, graph: Map<string, string[]>, pathStack: string[], allCycles: string[][]): boolean {
		visited.set(node, true);
		recStack.set(node, true);
		pathStack.push(node);

		for (let neighbour of graph.get(node) || []) {
			if (!visited.get(neighbour) && this.dfs(neighbour, visited, recStack, graph, pathStack, allCycles)) {
				return true; // Cycle detected
			} else if (recStack.get(neighbour)) {
				const cycleStartIndex = pathStack.indexOf(neighbour);
				allCycles.push(pathStack.slice(cycleStartIndex));
				return true;
			}
		}

		recStack.set(node, false); // Remove from recursion stack
		pathStack.pop(); // Backtrack
		return false;
	}

	private convertCyclesToRelationships(cycles: string[][], relationships: Relationship[]): Relationship[][] {
		return cycles.map(cycle => {
			const cycleRelationships: Relationship[] = [];

			for (let i = 0; i < cycle.length; i++) {
				const from = cycle[i];
				const to = cycle[(i + 1) % cycle.length]; // Wrap to start to form a closed cycle
				const rel = relationships.find(rel => rel.from === from && rel.to === to);

				if (rel)
					cycleRelationships.push(rel);
			}
			return cycleRelationships;
		});
	}
}
