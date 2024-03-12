import Rule from "../../core/Rule"
import { DiagramTypeEnum } from "../../../domain/diagram-type-enum"

export class ClassRule extends Rule {
    public readonly ruleType = DiagramTypeEnum.Class;

    constructor() {
        super('Class'); // Regex pattern for class diagrams
    }
}