import AbstractRule from '../AbstractRule';
import { DiagramType } from '../DiagramType';

export default class EntityRelationshipRule extends AbstractRule {
    protected ruleType = DiagramType.ERD

    constructor() {
        super(" /<diagram\\s+type=\"erd\"/");
    }
}