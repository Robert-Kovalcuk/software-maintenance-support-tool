import { Injectable } from '@nestjs/common';
import {ComponentDiagram} from "../../../domain/diagrams-dto/component/component-diagram"
import {Component} from "../../../domain/diagrams-dto/component/component"

@Injectable()
export class ComponentMergerService {

	public static merge(diagrams: ComponentDiagram[]) {
		let mergedComponents: Component[] = [];

		for (let i = 0; i < diagrams.length; i++) {
			mergedComponents = mergedComponents.concat(diagrams[i].components);
		}

		return new ComponentDiagram(mergedComponents);
	}
}
