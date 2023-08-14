import AbstractRule from '../../core/AbstractRule';
import { DiagramType } from '../../core/DiagramType';

export default class ClassRule extends AbstractRule {
    public readonly ruleType = DiagramType.Class

    constructor() {
        super("/<diagram\\s+type=\"interface\"/");
    }
}