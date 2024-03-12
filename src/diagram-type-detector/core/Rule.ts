import { Injectable, Scope } from "@nestjs/common"
import { DiagramTypeEnum } from "../../domain/diagram-type-enum"

@Injectable({
    scope: Scope.DEFAULT,
})
export default abstract class Rule {
    public readonly abstract ruleType: DiagramTypeEnum
    protected regexRule: string

    protected constructor(regexRule: string) {
        this.regexRule = regexRule
    }

    public apply(xmlContent: string): DiagramTypeEnum | null {
        return (new RegExp(this.regexRule)).exec(xmlContent) === null ? null : this.ruleType
    }
}