import { DiagramType } from "../../diagram-type-detector/core/DiagramType"
import BaseResponse from "./base-response"

export default class ParsedDetectResponse extends BaseResponse {
    private type: DiagramType | null
    private data: string

    private constructor(type: DiagramType | null, data: string) {
        super()

        this.type = type
        this.data = data
    }

    public static fromValue(type: DiagramType | null, data: string): ParsedDetectResponse {
        return new ParsedDetectResponse(type, data)
    }
}