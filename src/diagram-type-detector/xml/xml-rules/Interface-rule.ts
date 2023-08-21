import Rule from "../../core/Rule"
import { DiagramType } from "../../core/DiagramType"

export default class InterfaceRule extends Rule {
    public readonly ruleType = DiagramType.Interface

    constructor() {
        super("/<diagram\\s+type=\"interface\"/")
    }
}