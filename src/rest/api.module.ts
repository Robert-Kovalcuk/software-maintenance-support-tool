import { Module } from "@nestjs/common"
import { XmlController } from "./controllers/xml.controller"
import { DiagramTypeDetectorModule } from "../diagram-type-detector/Diagram-type-detector.module"
import { ParserModule } from "../parser/Parser.module"
import { XmlControllerService } from "./services/xml-controller.service"

@Module({
    imports: [DiagramTypeDetectorModule, ParserModule],
    controllers: [XmlController],
    providers: [XmlControllerService],
})
export class ApiModule {
}
