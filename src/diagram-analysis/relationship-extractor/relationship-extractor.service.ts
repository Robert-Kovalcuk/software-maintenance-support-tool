import { Injectable } from '@nestjs/common';
import {ComponentDiagram} from "../../domain/diagrams-dto/component/component-diagram";
import Relationship from "../Relationship";
import EntityRelationshipDiagram from "../../domain/diagrams-dto/entity-relationship/entity-relationship-diagram";
import ClassDiagram from "../../domain/diagrams-dto/class/class-diagram";
import InterfaceDiagram from "../../domain/diagrams-dto/interface/interface-diagram";

@Injectable()
export class RelationshipExtractorService {
	public fromComponentDiagram(d: ComponentDiagram): Relationship[] {
		let relationships: Relationship[] = []

		d.components.map(c => {
			c.dependencies.map(d => {
				relationships.push(new Relationship(c.name, d.targetComponent))
			})
		})

		return relationships
	}

	public fromEntityDiagram(d: EntityRelationshipDiagram): Relationship[] {
		let relationships: Relationship[] = []

		d.relationships.map(r => {
			relationships.push(new Relationship(r.from, r.to))
		})

		return relationships
	}

	// @ts-ignore
	public static fromClassDiagram(d: ClassDiagram): Relationship[] {
		//TODO ?
	}

	// @ts-ignore
	public static fromInterfaceDiagram(d: InterfaceDiagram): Relationship[] {
		//TODO ?
	}
}
