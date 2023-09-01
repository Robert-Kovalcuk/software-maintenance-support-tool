import Rule from "./Rule"
import { DiagramTypeEnum } from "../../domain/diagram-type-enum"

export default abstract class XmlDetector {
    protected abstract rules: Rule[]

    public abstract detect(content: string): DiagramTypeEnum | null
}