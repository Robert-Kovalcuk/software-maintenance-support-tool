import AbstractRule from '../AbstractRule';
import { DiagramType } from '../DiagramType';

export default class InterfaceRule extends AbstractRule {
    protected ruleType = DiagramType.Interface

    constructor() {
        super("/<diagram\\s+type=\"interface\"/");
    }
}