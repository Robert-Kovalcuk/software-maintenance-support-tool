import { Injectable } from '@nestjs/common';
import Clazz from "../../../domain/diagrams-dto/class/clazz"
import ClassDiagram from "../../../domain/diagrams-dto/class/class-diagram"

@Injectable()
export class ClassMergerService {
	public static merge(diagrams: ClassDiagram[]) {
		let mergedClasses: Clazz[] = [];

		for (let i = 0; i < diagrams.length; i++) {
			mergedClasses = mergedClasses.concat(diagrams[i].classes);
		}

		return new ClassDiagram(mergedClasses);
	}
}
