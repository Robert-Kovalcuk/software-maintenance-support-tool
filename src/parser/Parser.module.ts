import { Module } from "@nestjs/common"
import { XmlParserService } from "./services/Xml-parser.service"
import XmlParser from "./core/XmlParser"

@Module({
    providers: [{
        provide: XmlParser,
        useClass: XmlParserService
    }],
    exports: [{
        provide: XmlParser,
        useClass: XmlParserService
    }],
})
export class ParserModule {
}
