import {Module} from "@nestjs/common"
import {XmlParserService} from "./services/Xml-parser.service"
import XmlParser from "./core/XmlParser"
import Validator from "./validation/validator"
import {DiagramValidatorService} from "./validation/diagram-validator-service"

@Module({
    providers: [{
        provide: XmlParser,
        useClass: XmlParserService
    }, {
        provide: Validator,
        useClass: DiagramValidatorService
    }],
    exports: [{
        provide: XmlParser,
        useClass: XmlParserService
    }, {
        provide: Validator,
        useClass: DiagramValidatorService
    }],
})
export class ParserModule {
}
