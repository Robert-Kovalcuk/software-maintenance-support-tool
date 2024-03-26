import Relationship from "./Relationship";

export default abstract class GraphAnalyzer {
	protected buildGraph(relationships: Relationship[]): Map<string, string[]> {
		const graph = new Map<string, string[]>();
		relationships.forEach(rel => {
			if (!graph.has(rel.from)) {
				graph.set(rel.from, []);
			}
			graph.get(rel.from)!.push(rel.to);
		});
		return graph;
	}
}
