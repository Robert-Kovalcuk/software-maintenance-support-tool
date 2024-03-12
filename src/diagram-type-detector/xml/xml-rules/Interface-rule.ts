import Rule from "../../core/Rule"
import { DiagramTypeEnum } from "../../../domain/diagram-type-enum"

export class InterfaceRule extends Rule {
    public readonly ruleType = DiagramTypeEnum.Interface;

    constructor() {
        super('Interface'); // Regex pattern for interface diagrams
    }
}