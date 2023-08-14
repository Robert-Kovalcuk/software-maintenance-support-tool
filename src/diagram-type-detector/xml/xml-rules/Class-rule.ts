import AbstractRule from '../AbstractRule';
import { DiagramType } from '../DiagramType';

export default class ClassRule extends AbstractRule {
    protected ruleType = DiagramType.Class

    constructor() {
        super("/<diagram\\s+type=\"interface\"/");
    }
}