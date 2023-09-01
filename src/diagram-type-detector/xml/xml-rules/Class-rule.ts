import Rule from "../../core/Rule"
import { DiagramTypeEnum } from "../../../domain/diagram-type-enum"

export default class ClassRule extends Rule {
    public readonly ruleType = DiagramTypeEnum.Class

    constructor() {
        super("/<diagram\\s+type=\"interface\"/")
    }
}