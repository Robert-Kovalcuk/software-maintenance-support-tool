import { DiagramType } from "../../diagram-type-detector/core/DiagramType"

export default class ParsedDetectResponse {
    private type: DiagramType | null
    private data: string


    private constructor(type: DiagramType | null, data: string) {
        this.type = type
        this.data = data
    }

    public static fromValue(type: DiagramType | null, data: string): ParsedDetectResponse {
        return new ParsedDetectResponse(type, data)
    }

    public static fromValueString(type: DiagramType | null, data: string): string {
        return JSON.stringify(new ParsedDetectResponse(type, data))
    }
}