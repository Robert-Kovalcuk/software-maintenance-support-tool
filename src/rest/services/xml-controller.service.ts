import { Injectable } from "@nestjs/common"
import ParsedDetectResponse from "../response-models/ParsedDetectResponse"
import XmlParser from "../../parser/core/XmlParser"
import XmlDetector from "../../diagram-type-detector/core/XmlDetector"
import Validator from "../../parser/validation/validator"
import {ClassMapperService} from "../../mapper/class-mapper/class-mapper.service"
import {InterfaceMapperService} from "../../mapper/interface-mapper/interface-mapper.service"
import {ErdMapperService} from "../../mapper/erd-mapper/erd-mapper.service"
import {ComponentMapperService} from "../../mapper/component-mapper/component-mapper.service"

@Injectable()
export class XmlControllerService {

    public constructor(
        private parser: XmlParser,
        private detector: XmlDetector,
        private validator: Validator,
        private classMapperService: ClassMapperService,
        private interfaceMapperService: InterfaceMapperService,
        private erdMapperService: ErdMapperService,
        private componentMapperService: ComponentMapperService,
    ) {
    }

    public upload(file: Express.Multer.File): boolean {
        return false
    }

    public detectTypeAndParse(file: Express.Multer.File): string {
        const parsed = this.parser.parse(file)
        const detectedType = this.detector.detectFrom(parsed)


        //const validationResult = this.validator.validate(file.buffer.toString(), "C:\\PracaProgramovanieSkola\\projects\\src\\parser\\schemas\\entity-relationship-diagram-schema.xsd")

        //const mappedObject = this.classMapperService.mapToClassDiagram(parsed)
        //const mappedObject = this.interfaceMapperService.mapToInterfaceDiagram(parsed)
        //const mappedObject = this.erdMapperService.mapToEntityRelationshipDiagram(parsed)
        console.log(parsed)
        const mappedObject = this.componentMapperService.mapToComponentDiagram(parsed)

        return ParsedDetectResponse.fromValue(detectedType, parsed).toStringJson()
    }

    public export(file: string): any {
        return null
    }
}











