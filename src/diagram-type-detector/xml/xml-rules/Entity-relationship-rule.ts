import AbstractRule from '../../core/AbstractRule';
import { DiagramType } from '../../core/DiagramType';

export default class EntityRelationshipRule extends AbstractRule {
    public readonly ruleType = DiagramType.ERD

    constructor() {
        super(" /<diagram\\s+type=\"erd\"/");
    }
}