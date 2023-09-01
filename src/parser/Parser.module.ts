import {Module} from "@nestjs/common"
import {XmlParserService} from "./services/Xml-parser.service"
import XmlParser from "./core/XmlParser"
import Validator from "./validation/validator"
import {ClassDiagramValidatorService} from "./validation/class-diagram-validator.service"

@Module({
    providers: [{
        provide: XmlParser,
        useClass: XmlParserService
    }, {
        provide: Validator,
        useClass: ClassDiagramValidatorService
    }],
    exports: [{
        provide: XmlParser,
        useClass: XmlParserService
    }, {
        provide: Validator,
        useClass: ClassDiagramValidatorService
    }],
})
export class ParserModule {
}
