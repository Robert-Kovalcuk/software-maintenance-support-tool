import { Injectable } from "@nestjs/common"
import { DiagramTypeEnum } from "../../domain/diagram-type-enum"
import XmlDetector from "../core/XmlDetector"
import ClassRule from "../xml/xml-rules/Class-rule"
import InterfaceRule from "../xml/xml-rules/Interface-rule"
import EntityRelationshipRule from "../xml/xml-rules/Entity-relationship-rule"

@Injectable({})
export default class XmlDetectorService extends XmlDetector {
    protected rules = [new ClassRule(), new InterfaceRule(), new EntityRelationshipRule()]

    public constructor() {
        super()
    }

    public detect(content: string): DiagramTypeEnum | null {
        let detectedType: DiagramTypeEnum | null = null

        this.rules.forEach(rule => {
            const ruleMatched = rule.apply(content)

            if (ruleMatched && detectedType)
                return null
            if (ruleMatched && !detectedType)
                detectedType = rule.ruleType
        })

        return detectedType
    }
}