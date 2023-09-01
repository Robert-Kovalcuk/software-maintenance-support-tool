import { DiagramTypeEnum } from "../../domain/diagram-type-enum"
import BaseResponse from "./base-response"

export default class ParsedDetectResponse extends BaseResponse {
    private type: DiagramTypeEnum | null
    private data: string

    private constructor(type: DiagramTypeEnum | null, data: string) {
        super()

        this.type = type
        this.data = data
    }

    public static fromValue(type: DiagramTypeEnum | null, data: string): ParsedDetectResponse {
        return new ParsedDetectResponse(type, data)
    }
}