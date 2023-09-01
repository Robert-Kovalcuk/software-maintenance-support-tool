import { Injectable } from "@nestjs/common"
import ParsedDetectResponse from "../response-models/ParsedDetectResponse"
import XmlParser from "../../parser/core/XmlParser"
import XmlDetector from "../../diagram-type-detector/core/XmlDetector"
import Validator from "../../parser/validation/validator"

@Injectable()
export class XmlControllerService {

    public constructor(
        private parser: XmlParser,
        private detector: XmlDetector,
        private validator: Validator
    ) {
    }

    public upload(file: Express.Multer.File): boolean {
        return false
    }

    public detectTypeAndParse(file: Express.Multer.File): string {
        const parsed = this.parser.parse(file)
        const detectedType = this.detector.detect(parsed)
        const validationResult = this.validator.validate(file.buffer.toString())
        console.log(validationResult)

        return ParsedDetectResponse.fromValue(detectedType, parsed).toStringJson()
    }

    public export(file: string): any {
        return null
    }
}











