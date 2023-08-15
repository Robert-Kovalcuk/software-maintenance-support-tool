import Rule from './Rule';
import { DiagramType } from './DiagramType';

export default abstract class Detector {
    protected abstract rules: Rule[]

    public abstract detect(content: string): DiagramType | null

}