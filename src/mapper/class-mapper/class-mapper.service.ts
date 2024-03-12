import { Injectable } from '@nestjs/common';
import ClassDiagram from "../../domain/diagrams-dto/class/class-diagram";
import Attribute from "../../domain/diagrams-dto/class/attribute";
import Parameter from "../../domain/diagrams-dto/class/parameter";
import Method from "../../domain/diagrams-dto/class/method";
import Clazz from "../../domain/diagrams-dto/class/clazz";

@Injectable()
export class ClassMapperService {
	public mapToClassDiagram(data: string): ClassDiagram {
		const parsedClassDiagram = JSON.parse(data);

		try {
			const classes = parsedClassDiagram.diagram.class.map((clazz: any) => {
				const attributesArray = Array.isArray(clazz.attributes.attribute)
					? clazz.attributes.attribute
					: [clazz.attributes.attribute]; // Normalize to array

				const attributes = attributesArray.map((attribute: any) => new Attribute(
					attribute.name,
					attribute.type,
					attribute.visibility
				));

				const methodsArray = Array.isArray(clazz.methods.method)
					? clazz.methods.method
					: [clazz.methods.method]; // Normalize to array

				const methods = methodsArray.map((method: any) => {
					const parametersArray = Array.isArray(method.parameters.parameter)
						? method.parameters.parameter
						: method.parameters.parameter ? [method.parameters.parameter] : []; // Normalize to array and handle no parameters

					const parameters = parametersArray.map((parameter: any) => new Parameter(
						parameter.name,
						parameter.type
					));
					return new Method(
						method.name,
						method.returnType,
						parameters,
						method.visibility
					);
				});

				return new Clazz(
					clazz.name,
					attributes,
					methods
				);
			});

			return new ClassDiagram(classes);
		} catch (e) {
			console.error('Error mapping class diagram:', e);
			throw new Error('Error mapping class diagram: ' + e.message);
		}
	}
}
