import Rule from "../../core/Rule"
import { DiagramTypeEnum } from "../../../domain/diagram-type-enum"

export class EntityRelationshipRule extends Rule {
    public readonly ruleType = DiagramTypeEnum.ERD;

    constructor() {
        super('Entity'); // Regex pattern for ER diagrams
    }
}