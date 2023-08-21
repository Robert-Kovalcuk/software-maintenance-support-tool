import { Injectable } from "@nestjs/common"
import ParsedDetectResponse from "../response-models/ParsedDetectResponse"
import XmlParser from "../../parser/core/XmlParser"
import XmlDetector from "../../diagram-type-detector/core/XmlDetector"

@Injectable()
export class XmlControllerService {

    public constructor(
        private parser: XmlParser,
        private detector: XmlDetector,
    ) {
    }

    public upload(file: Express.Multer.File): boolean {
        return false
    }

    public detectTypeAndParse(file: Express.Multer.File): string {
        const parsed = this.parser.parse(file)
        const detectedType = this.detector.detect(parsed)

        return ParsedDetectResponse.fromValueString(detectedType, parsed)
    }

    public export(file: string): any {
        return null
    }
}











