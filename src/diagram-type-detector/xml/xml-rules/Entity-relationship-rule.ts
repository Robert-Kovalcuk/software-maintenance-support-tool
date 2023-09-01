import Rule from "../../core/Rule"
import { DiagramTypeEnum } from "../../../domain/diagram-type-enum"

export default class EntityRelationshipRule extends Rule {
    public readonly ruleType = DiagramTypeEnum.ERD

    constructor() {
        super(" /<diagram\\s+type=\"erd\"/")
    }
}