import Rule from "../../core/Rule"
import { DiagramTypeEnum } from "../../../domain/diagram-type-enum"

export default class InterfaceRule extends Rule {
    public readonly ruleType = DiagramTypeEnum.Interface

    constructor() {
        super("/<diagram\\s+type=\"interface\"/")
    }
}