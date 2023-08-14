import AbstractRule from './AbstractRule';
import { DiagramType } from './DiagramType';

export default abstract class AbstractDetector {
    protected abstract rules: AbstractRule[]

    public abstract detect(content: string): DiagramType | null

}