import { Injectable } from "@nestjs/common"
import { DiagramTypeEnum } from "../../domain/diagram-type-enum"
import XmlDetector from "../core/XmlDetector"
import {ClassRule} from "../xml/xml-rules/Class-rule"
import {InterfaceRule} from "../xml/xml-rules/Interface-rule"
import {EntityRelationshipRule} from "../xml/xml-rules/Entity-relationship-rule"

@Injectable({})
export default class XmlDetectorService extends XmlDetector {
    protected rules = [new ClassRule(), new InterfaceRule(), new EntityRelationshipRule()]

    public constructor() {
        super()
    }

    public detectFrom(content: string): DiagramTypeEnum | null {
        let result = null

        this.rules.forEach(rule => {
            const ruleMatched = rule.apply(content)

            if (ruleMatched)
                result = ruleMatched
        })

        return result
    }
}