import { Injectable } from '@nestjs/common';
import EntityRelationshipDiagram from "../../../domain/diagrams-dto/entity-relationship/entity-relationship-diagram"
import Entity from "../../../domain/diagrams-dto/entity-relationship/entity"
import Relationship from "../../../domain/diagrams-dto/entity-relationship/relationship"

@Injectable()
export class ErdMergerService {

	public static merge(diagrams: EntityRelationshipDiagram[]): EntityRelationshipDiagram {
		let mergedEntities: Entity[] = [];
		let mergedRelationships: Relationship[] = [];

		for (let i = 0; i < diagrams.length; i++) {
			mergedEntities = mergedEntities.concat(diagrams[i].entities);
			mergedRelationships = mergedRelationships.concat(diagrams[i].relationships);
		}

		return new EntityRelationshipDiagram(mergedEntities, mergedRelationships);
	}
}
