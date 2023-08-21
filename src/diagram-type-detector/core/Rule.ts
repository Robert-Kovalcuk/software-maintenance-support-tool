import { Injectable, Scope } from "@nestjs/common"
import { DiagramType } from "./DiagramType"

@Injectable({
    scope: Scope.DEFAULT,
})
export default abstract class Rule {
    public readonly abstract ruleType: DiagramType
    protected regexRule: string

    protected constructor(regexRule: string) {
        this.regexRule = regexRule
    }

    public apply(xmlContent: string): DiagramType | null {
        return (new RegExp(this.regexRule)).exec(xmlContent) === null ? this.ruleType : null
    }
}