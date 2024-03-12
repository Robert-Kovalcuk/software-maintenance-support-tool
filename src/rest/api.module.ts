import { Module } from "@nestjs/common"
import { XmlController } from "./controllers/xml.controller"
import { DiagramTypeDetectorModule } from "../diagram-type-detector/Diagram-type-detector.module"
import { ParserModule } from "../parser/Parser.module"
import { XmlControllerService } from "./services/xml-controller.service"
import {MapperModule} from "../mapper/mapper.module"
import {ClassMapperService} from "../mapper/class-mapper/class-mapper.service"
import {InterfaceMapperService} from "../mapper/interface-mapper/interface-mapper.service"
import {ErdMapperService} from "../mapper/erd-mapper/erd-mapper.service"
import {ComponentMapperService} from "../mapper/component-mapper/component-mapper.service"

@Module({
    imports: [DiagramTypeDetectorModule, ParserModule, MapperModule],
    controllers: [XmlController],
    providers: [XmlControllerService, ClassMapperService, InterfaceMapperService, ErdMapperService, ComponentMapperService],
})
export class ApiModule {
}
