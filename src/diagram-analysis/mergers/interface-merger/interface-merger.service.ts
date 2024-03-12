import { Injectable } from '@nestjs/common';
import InterfaceDiagram from "../../../domain/diagrams-dto/interface/interface-diagram"
import Interface from "../../../domain/diagrams-dto/interface/interface"

@Injectable()
export class InterfaceMergerService {
	public static merge(diagrams: InterfaceDiagram[]): InterfaceDiagram {
		let mergedInterfaces: Interface[] = [];

		for (let i = 0; i < diagrams.length; i++) {
			mergedInterfaces = mergedInterfaces.concat(diagrams[i].interfaces);
		}

		return new InterfaceDiagram(mergedInterfaces);
	}
}
