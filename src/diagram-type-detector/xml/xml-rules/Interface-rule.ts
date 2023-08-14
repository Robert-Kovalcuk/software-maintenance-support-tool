import AbstractRule from '../../core/AbstractRule';
import { DiagramType } from '../../core/DiagramType';

export default class InterfaceRule extends AbstractRule {
    public readonly ruleType = DiagramType.Interface

    constructor() {
        super("/<diagram\\s+type=\"interface\"/");
    }
}