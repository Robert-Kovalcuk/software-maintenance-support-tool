import Rule from '../../core/Rule';
import { DiagramType } from '../../core/DiagramType';

export default class EntityRelationshipRule extends Rule {
    public readonly ruleType = DiagramType.ERD

    constructor() {
        super(" /<diagram\\s+type=\"erd\"/");
    }
}