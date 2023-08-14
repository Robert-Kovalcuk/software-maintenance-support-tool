import { Injectable } from '@nestjs/common';
import { DiagramType } from '../core/DiagramType';
import AbstractDetector from '../core/AbstractDetector';
import ClassRule from './xml-rules/Class-rule';
import InterfaceRule from './xml-rules/Interface-rule';
import EntityRelationshipRule from './xml-rules/Entity-relationship-rule';

@Injectable({

})
export default class XMLDetectorService extends AbstractDetector {
    protected rules = [new ClassRule(), new InterfaceRule(), new EntityRelationshipRule()];

    public constructor() {
        super()
    }

    public detect(content: string): DiagramType | null {
        let detectedType: DiagramType | null = null

        this.rules.forEach(rule => {
            const ruleMatched = rule.apply(content)

            if(ruleMatched && detectedType)
                return null
            if(ruleMatched && !detectedType)
                detectedType = rule.ruleType
        })

        return detectedType
    }
}