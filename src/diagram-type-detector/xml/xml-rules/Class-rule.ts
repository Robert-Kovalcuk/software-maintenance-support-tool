import Rule from "../../core/Rule"
import { DiagramType } from "../../core/DiagramType"

export default class ClassRule extends Rule {
    public readonly ruleType = DiagramType.Class

    constructor() {
        super("/<diagram\\s+type=\"interface\"/")
    }
}