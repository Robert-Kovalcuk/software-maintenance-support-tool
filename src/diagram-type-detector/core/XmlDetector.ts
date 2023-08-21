import Rule from "./Rule"
import { DiagramType } from "./DiagramType"

export default abstract class XmlDetector {
    protected abstract rules: Rule[]

    public abstract detect(content: string): DiagramType | null
}